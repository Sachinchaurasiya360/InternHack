
i
m
p
o
r
t
 
R
e
a
c
t
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
C
h
e
c
k
,
 
C
o
p
y
,
 
U
s
e
r
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
A
g
e
n
t
J
o
b
C
a
r
d
 
}
 
f
r
o
m
 
"
.
/
A
g
e
n
t
J
o
b
C
a
r
d
"
;


i
m
p
o
r
t
 
{
 
E
m
a
i
l
J
o
b
s
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
/
E
m
a
i
l
J
o
b
s
B
u
t
t
o
n
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
J
o
b
F
e
e
d
M
a
t
c
h
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
t
y
p
e
s
"
;


i
m
p
o
r
t
 
{
 
u
s
e
A
u
t
h
S
t
o
r
e
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
u
t
h
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
o
n
"
;




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
r
o
l
e
:
 
"
u
s
e
r
"
 
|
 
"
a
s
s
i
s
t
a
n
t
"
;


 
 
c
o
n
t
e
n
t
:
 
s
t
r
i
n
g
;


 
 
j
o
b
s
?
:
 
J
o
b
F
e
e
d
M
a
t
c
h
[
"
j
o
b
"
]
[
]
;


 
 
i
s
S
t
r
e
a
m
i
n
g
?
:
 
b
o
o
l
e
a
n
;


 
 
p
r
e
c
e
d
i
n
g
U
s
e
r
P
r
o
m
p
t
?
:
 
s
t
r
i
n
g
;


}




f
u
n
c
t
i
o
n
 
f
o
r
m
a
t
C
o
n
t
e
n
t
(
t
e
x
t
:
 
s
t
r
i
n
g
)
 
{


 
 
c
o
n
s
t
 
p
a
r
t
s
 
=
 
t
e
x
t
.
s
p
l
i
t
(
/
(
\
*
\
*
[
^
*
]
+
\
*
\
*
)
/
g
)
;


 
 
r
e
t
u
r
n
 
p
a
r
t
s
.
m
a
p
(
(
p
a
r
t
,
 
i
)
 
=
>
 
{


 
 
 
 
i
f
 
(
p
a
r
t
.
s
t
a
r
t
s
W
i
t
h
(
"
*
*
"
)
 
&
&
 
p
a
r
t
.
e
n
d
s
W
i
t
h
(
"
*
*
"
)
)
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
k
e
y
=
{
i
}
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
b
o
l
d
"
>


 
 
 
 
 
 
 
 
 
 
{
p
a
r
t
.
s
l
i
c
e
(
2
,
 
-
2
)
}


 
 
 
 
 
 
 
 
<
/
s
t
r
o
n
g
>


 
 
 
 
 
 
)
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
p
a
r
t
.
s
p
l
i
t
(
"
\
n
"
)
.
m
a
p
(
(
l
i
n
e
,
 
j
,
 
a
r
r
)
 
=
>
 
(


 
 
 
 
 
 
<
s
p
a
n
 
k
e
y
=
{
`
$
{
i
}
-
$
{
j
}
`
}
>


 
 
 
 
 
 
 
 
{
l
i
n
e
}


 
 
 
 
 
 
 
 
{
j
 
<
 
a
r
r
.
l
e
n
g
t
h
 
-
 
1
 
&
&
 
<
b
r
 
/
>
}


 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
)
)
;


 
 
}
)
;


}




f
u
n
c
t
i
o
n
 
m
e
s
s
a
g
e
T
o
P
l
a
i
n
T
e
x
t
(
c
o
n
t
e
n
t
:
 
s
t
r
i
n
g
,
 
j
o
b
s
?
:
 
J
o
b
F
e
e
d
M
a
t
c
h
[
"
j
o
b
"
]
[
]
)
 
{


 
 
i
f
 
(
!
j
o
b
s
?
.
l
e
n
g
t
h
)
 
r
e
t
u
r
n
 
c
o
n
t
e
n
t
;




 
 
c
o
n
s
t
 
j
o
b
L
i
n
e
s
 
=
 
j
o
b
s
.
m
a
p
(
(
j
o
b
,
 
i
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
d
e
t
a
i
l
s
 
=
 
[
j
o
b
.
t
i
t
l
e
,
 
j
o
b
.
c
o
m
p
a
n
y
,
 
j
o
b
.
l
o
c
a
t
i
o
n
,
 
j
o
b
.
a
p
p
l
i
c
a
t
i
o
n
U
r
l
]


 
 
 
 
 
 
.
m
a
p
(
(
v
a
l
u
e
)
 
=
>
 
v
a
l
u
e
?
.
t
r
i
m
(
)
)


 
 
 
 
 
 
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
;




 
 
 
 
r
e
t
u
r
n
 
`
$
{
i
 
+
 
1
}
.
 
$
{
d
e
t
a
i
l
s
.
j
o
i
n
(
"
 
-
 
"
)
}
`
;


 
 
}
)
;




 
 
r
e
t
u
r
n
 
`
$
{
c
o
n
t
e
n
t
 
?
 
`
$
{
c
o
n
t
e
n
t
}
\
n
\
n
`
 
:
 
"
"
}
J
o
b
s
:
\
n
$
{
j
o
b
L
i
n
e
s
.
j
o
i
n
(
"
\
n
"
)
}
`
;


}




f
u
n
c
t
i
o
n
 
C
o
p
y
M
e
s
s
a
g
e
B
u
t
t
o
n
(
{
 
t
e
x
t
 
}
:
 
{
 
t
e
x
t
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
c
o
n
s
t
 
[
c
o
p
i
e
d
,
 
s
e
t
C
o
p
i
e
d
]
 
=
 
R
e
a
c
t
.
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
r
e
s
e
t
T
i
m
e
r
R
e
f
 
=
 
R
e
a
c
t
.
u
s
e
R
e
f
<
n
u
m
b
e
r
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;




 
 
R
e
a
c
t
.
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
r
e
s
e
t
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
!
=
=
 
n
u
l
l
)
 
w
i
n
d
o
w
.
c
l
e
a
r
T
i
m
e
o
u
t
(
r
e
s
e
t
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
}
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
C
o
p
y
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
i
f
 
(
!
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
?
.
w
r
i
t
e
T
e
x
t
)
 
r
e
t
u
r
n
;




 
 
 
 
 
 
a
w
a
i
t
 
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
.
w
r
i
t
e
T
e
x
t
(
t
e
x
t
)
;


 
 
 
 
 
 
s
e
t
C
o
p
i
e
d
(
t
r
u
e
)
;




 
 
 
 
 
 
i
f
 
(
r
e
s
e
t
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
!
=
=
 
n
u
l
l
)
 
w
i
n
d
o
w
.
c
l
e
a
r
T
i
m
e
o
u
t
(
r
e
s
e
t
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
r
e
s
e
t
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
w
i
n
d
o
w
.
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
s
e
t
C
o
p
i
e
d
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
r
e
s
e
t
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
n
u
l
l
;


 
 
 
 
 
 
}
,
 
1
5
0
0
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
/
/
 
C
l
i
p
b
o
a
r
d
 
a
c
c
e
s
s
 
c
a
n
 
b
e
 
b
l
o
c
k
e
d
 
i
n
 
i
n
s
e
c
u
r
e
 
c
o
n
t
e
x
t
s
.


 
 
 
 
}


 
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
o
u
t
l
i
n
e
"


 
 
 
 
 
 
m
o
d
e
=
"
i
c
o
n
"


 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
C
o
p
y
}


 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{
c
o
p
i
e
d
 
?
 
"
C
o
p
i
e
d
"
 
:
 
"
C
o
p
y
 
m
e
s
s
a
g
e
"
}


 
 
 
 
 
 
t
i
t
l
e
=
{
c
o
p
i
e
d
 
?
 
"
C
o
p
i
e
d
"
 
:
 
"
C
o
p
y
 
m
e
s
s
a
g
e
"
}


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
j
o
b
-
a
g
e
n
t
-
c
o
p
y
-
b
u
t
t
o
n
 
a
b
s
o
l
u
t
e
 
b
o
t
t
o
m
-
2
 
r
i
g
h
t
-
2
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
b
g
-
w
h
i
t
e
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
s
h
a
d
o
w
-
s
m
 
t
r
a
n
s
i
t
i
o
n
-
o
p
a
c
i
t
y
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
h
o
v
e
r
:
b
g
-
w
h
i
t
e
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
f
o
c
u
s
-
v
i
s
i
b
l
e
:
r
i
n
g
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
8
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
f
o
c
u
s
-
v
i
s
i
b
l
e
:
r
i
n
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
f
o
c
u
s
-
v
i
s
i
b
l
e
:
r
i
n
g
-
o
f
f
s
e
t
-
s
t
o
n
e
-
9
0
0
"


 
 
 
 
>


 
 
 
 
 
 
{
c
o
p
i
e
d
 
?
 
<
C
h
e
c
k
 
c
l
a
s
s
N
a
m
e
=
"
h
-
3
.
5
 
w
-
3
.
5
"
 
/
>
 
:
 
<
C
o
p
y
 
c
l
a
s
s
N
a
m
e
=
"
h
-
3
.
5
 
w
-
3
.
5
"
 
/
>
}


 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
)
;


}




e
x
p
o
r
t
 
c
o
n
s
t
 
A
g
e
n
t
M
e
s
s
a
g
e
 
=
 
R
e
a
c
t
.
m
e
m
o
(
f
u
n
c
t
i
o
n
 
A
g
e
n
t
M
e
s
s
a
g
e
(
{
 
r
o
l
e
,
 
c
o
n
t
e
n
t
,
 
j
o
b
s
,
 
i
s
S
t
r
e
a
m
i
n
g
,
 
p
r
e
c
e
d
i
n
g
U
s
e
r
P
r
o
m
p
t
 
}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
{
 
u
s
e
r
 
}
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
)
;


 
 
c
o
n
s
t
 
i
s
U
s
e
r
 
=
 
r
o
l
e
 
=
=
=
 
"
u
s
e
r
"
;


 
 
c
o
n
s
t
 
c
o
p
y
T
e
x
t
 
=
 
m
e
s
s
a
g
e
T
o
P
l
a
i
n
T
e
x
t
(
c
o
n
t
e
n
t
,
 
j
o
b
s
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
}


 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
2
5
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
f
l
e
x
 
g
a
p
-
3
 
$
{
i
s
U
s
e
r
 
?
 
"
f
l
e
x
-
r
o
w
-
r
e
v
e
r
s
e
"
 
:
 
"
j
o
b
-
a
g
e
n
t
-
c
o
p
y
-
g
r
o
u
p
"
}
`
}


 
 
 
 
>


 
 
 
 
 
 
{
/
*
 
A
v
a
t
a
r
 
*
/
}


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
8
 
h
-
8
 
r
o
u
n
d
e
d
-
m
d
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
s
h
r
i
n
k
-
0
 
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
$
{


 
 
 
 
 
 
 
 
 
 
i
s
U
s
e
r


 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
1
0
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
s
t
o
n
e
-
7
0
0
"


 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
i
s
U
s
e
r
 
?
 
(


 
 
 
 
 
 
 
 
 
 
u
s
e
r
?
.
p
r
o
f
i
l
e
P
i
c
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
u
s
e
r
.
p
r
o
f
i
l
e
P
i
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
u
s
e
r
.
n
a
m
e
 
?
?
 
"
Y
o
u
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
h
-
f
u
l
l
 
o
b
j
e
c
t
-
c
o
v
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
u
s
e
r
?
.
n
a
m
e
?
.
c
h
a
r
A
t
(
0
)
?
.
t
o
U
p
p
e
r
C
a
s
e
(
)
 
|
|
 
<
U
s
e
r
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
)


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
<
i
m
g
 
s
r
c
=
"
/
l
o
g
o
.
p
n
g
"
 
a
l
t
=
"
I
n
t
e
r
n
H
a
c
k
"
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
 
o
b
j
e
c
t
-
c
o
n
t
a
i
n
"
 
/
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
C
o
n
t
e
n
t
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
{
`
m
a
x
-
w
-
[
8
5
%
]
 
s
m
:
m
a
x
-
w
-
[
8
0
%
]
 
$
{
i
s
U
s
e
r
 
?
 
"
i
t
e
m
s
-
e
n
d
"
 
:
 
"
i
t
e
m
s
-
s
t
a
r
t
"
}
 
f
l
e
x
 
f
l
e
x
-
c
o
l
`
}
>


 
 
 
 
 
 
 
 
{
/
*
 
R
o
l
e
 
k
i
c
k
e
r
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
{
`
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
 
m
b
-
1
 
$
{
i
s
U
s
e
r
 
?
 
"
f
l
e
x
-
r
o
w
-
r
e
v
e
r
s
e
"
 
:
 
"
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
 
w
-
1
 
b
g
-
l
i
m
e
-
4
0
0
"
>
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
U
s
e
r
 
?
 
"
y
o
u
"
 
:
 
"
a
g
e
n
t
"
}


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
r
e
l
a
t
i
v
e
 
p
x
-
4
 
p
y
-
2
.
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
i
s
U
s
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
t
e
x
t
-
s
t
o
n
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
2
0
0
 
p
r
-
1
1
"


 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
i
s
U
s
e
r
 
?
 
c
o
n
t
e
n
t
 
:
 
f
o
r
m
a
t
C
o
n
t
e
n
t
(
c
o
n
t
e
n
t
)
}


 
 
 
 
 
 
 
 
 
 
{
!
i
s
U
s
e
r
 
&
&
 
!
i
s
S
t
r
e
a
m
i
n
g
 
&
&
 
<
C
o
p
y
M
e
s
s
a
g
e
B
u
t
t
o
n
 
t
e
x
t
=
{
c
o
p
y
T
e
x
t
}
 
/
>
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
I
n
l
i
n
e
 
j
o
b
 
c
a
r
d
s
 
*
/
}


 
 
 
 
 
 
 
 
{
!
i
s
U
s
e
r
 
&
&
 
j
o
b
s
 
&
&
 
j
o
b
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
3
 
w
-
f
u
l
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
 
m
b
-
2
 
m
l
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
 
w
-
1
 
b
g
-
l
i
m
e
-
4
0
0
"
>
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
s
.
l
e
n
g
t
h
}
 
m
a
t
c
h
{
j
o
b
s
.
l
e
n
g
t
h
 
>
 
1
 
?
 
"
e
s
"
 
:
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
2
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
s
.
m
a
p
(
(
j
o
b
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
g
e
n
t
J
o
b
C
a
r
d
 
k
e
y
=
{
j
o
b
.
i
d
}
 
j
o
b
=
{
j
o
b
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
!
i
s
S
t
r
e
a
m
i
n
g
 
&
&
 
<
E
m
a
i
l
J
o
b
s
B
u
t
t
o
n
 
j
o
b
s
=
{
j
o
b
s
}
 
p
r
e
c
e
d
i
n
g
U
s
e
r
P
r
o
m
p
t
=
{
p
r
e
c
e
d
i
n
g
U
s
e
r
P
r
o
m
p
t
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
)
;


}
)
;


