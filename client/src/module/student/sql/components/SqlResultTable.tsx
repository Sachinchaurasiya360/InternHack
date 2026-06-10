
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
C
i
r
c
l
e
2
,
 
X
C
i
r
c
l
e
,
 
C
l
o
c
k
,
 
A
l
e
r
t
T
r
i
a
n
g
l
e
 
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
@
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
 
 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
F
i
x
 
3
:
 
p
r
o
j
e
c
t
 
B
u
t
t
o
n


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
 
Q
u
e
r
y
R
e
s
u
l
t
 
}
 
f
r
o
m
 
"
.
.
/
l
i
b
/
s
q
l
-
e
n
g
i
n
e
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
 
V
a
l
i
d
a
t
i
o
n
R
e
s
u
l
t
 
}
 
f
r
o
m
 
"
.
.
/
l
i
b
/
q
u
e
r
y
-
v
a
l
i
d
a
t
o
r
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
 
S
q
l
R
e
s
u
l
t
T
a
b
l
e
P
r
o
p
s
 
{


 
 
r
e
s
u
l
t
:
 
Q
u
e
r
y
R
e
s
u
l
t
 
|
 
n
u
l
l
;


 
 
v
a
l
i
d
a
t
i
o
n
:
 
V
a
l
i
d
a
t
i
o
n
R
e
s
u
l
t
 
|
 
n
u
l
l
;


 
 
s
h
o
w
E
x
p
e
c
t
e
d
:
 
b
o
o
l
e
a
n
;


 
 
e
x
p
e
c
t
e
d
O
u
t
p
u
t
?
:
 
{
 
c
o
l
u
m
n
s
:
 
s
t
r
i
n
g
[
]
;
 
r
o
w
s
:
 
(
s
t
r
i
n
g
 
|
 
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
)
[
]
[
]
 
}
;


}




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
S
q
l
R
e
s
u
l
t
T
a
b
l
e
(
{
 
r
e
s
u
l
t
,
 
v
a
l
i
d
a
t
i
o
n
,
 
s
h
o
w
E
x
p
e
c
t
e
d
,
 
e
x
p
e
c
t
e
d
O
u
t
p
u
t
 
}
:
 
S
q
l
R
e
s
u
l
t
T
a
b
l
e
P
r
o
p
s
)
 
{


 
 
/
/
 
─
─
 
C
S
V
 
D
o
w
n
l
o
a
d
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─




 
 
/
/
 
F
i
x
 
2
:
 
s
h
a
r
e
d
 
e
s
c
a
p
e
r
 
a
p
p
l
i
e
d
 
t
o
 
B
O
T
H
 
h
e
a
d
e
r
s
 
a
n
d
 
d
a
t
a
 
c
e
l
l
s


 
 
c
o
n
s
t
 
e
s
c
a
p
e
C
S
V
 
=
 
(
v
a
l
u
e
:
 
s
t
r
i
n
g
)
 
=
>
 
`
"
$
{
v
a
l
u
e
.
r
e
p
l
a
c
e
(
/
"
/
g
,
 
'
"
"
'
)
}
"
`
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
D
o
w
n
l
o
a
d
C
S
V
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
r
e
s
u
l
t
 
|
|
 
r
e
s
u
l
t
.
e
r
r
o
r
 
|
|
 
r
e
s
u
l
t
.
c
o
l
u
m
n
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
;




 
 
 
 
/
/
 
F
i
x
 
2
:
 
h
e
a
d
e
r
s
 
n
o
w
 
g
o
 
t
h
r
o
u
g
h
 
e
s
c
a
p
e
C
S
V


 
 
 
 
c
o
n
s
t
 
h
e
a
d
e
r
s
 
=
 
r
e
s
u
l
t
.
c
o
l
u
m
n
s
.
m
a
p
(
c
o
l
 
=
>
 
e
s
c
a
p
e
C
S
V
(
c
o
l
)
)
.
j
o
i
n
(
'
,
'
)
;




 
 
 
 
c
o
n
s
t
 
c
s
v
R
o
w
s
 
=
 
r
e
s
u
l
t
.
r
o
w
s
.
m
a
p
(
r
o
w
 
=
>


 
 
 
 
 
 
r
o
w
.
m
a
p
(
c
e
l
l
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
c
e
l
l
 
=
=
=
 
n
u
l
l
 
|
|
 
c
e
l
l
 
=
=
=
 
u
n
d
e
f
i
n
e
d
)
 
r
e
t
u
r
n
 
'
"
"
'
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
 
=
 
t
y
p
e
o
f
 
c
e
l
l
 
=
=
=
 
'
o
b
j
e
c
t
'
 
?
 
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
c
e
l
l
)
 
:
 
S
t
r
i
n
g
(
c
e
l
l
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
e
s
c
a
p
e
C
S
V
(
s
)
;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
F
i
x
 
2
:
 
r
e
u
s
e
s
 
s
a
m
e
 
e
s
c
a
p
e
r


 
 
 
 
 
 
}
)
.
j
o
i
n
(
'
,
'
)


 
 
 
 
)
;




 
 
 
 
/
/
 
F
i
x
 
4
:
 
C
R
L
F
 
l
i
n
e
 
e
n
d
i
n
g
s
 
p
e
r
 
R
F
C
 
4
1
8
0


 
 
 
 
c
o
n
s
t
 
c
s
v
 
=
 
[
h
e
a
d
e
r
s
,
 
.
.
.
c
s
v
R
o
w
s
]
.
j
o
i
n
(
'
\
r
\
n
'
)
;




 
 
 
 
c
o
n
s
t
 
b
l
o
b
 
=
 
n
e
w
 
B
l
o
b
(
[
c
s
v
]
,
 
{
 
t
y
p
e
:
 
'
t
e
x
t
/
c
s
v
;
c
h
a
r
s
e
t
=
u
t
f
-
8
;
'
 
}
)
;


 
 
 
 
c
o
n
s
t
 
u
r
l
 
=
 
U
R
L
.
c
r
e
a
t
e
O
b
j
e
c
t
U
R
L
(
b
l
o
b
)
;


 
 
 
 
c
o
n
s
t
 
a
 
=
 
d
o
c
u
m
e
n
t
.
c
r
e
a
t
e
E
l
e
m
e
n
t
(
'
a
'
)
;




 
 
 
 
a
.
h
r
e
f
 
=
 
u
r
l
;


 
 
 
 
a
.
d
o
w
n
l
o
a
d
 
=
 
`
r
e
s
u
l
t
s
_
$
{
n
e
w
 
D
a
t
e
(
)
.
t
o
I
S
O
S
t
r
i
n
g
(
)
.
s
p
l
i
t
(
'
T
'
)
[
0
]
}
.
c
s
v
`
;


 
 
 
 
d
o
c
u
m
e
n
t
.
b
o
d
y
.
a
p
p
e
n
d
C
h
i
l
d
(
a
)
;


 
 
 
 
a
.
c
l
i
c
k
(
)
;


 
 
 
 
d
o
c
u
m
e
n
t
.
b
o
d
y
.
r
e
m
o
v
e
C
h
i
l
d
(
a
)
;


 
 
 
 
U
R
L
.
r
e
v
o
k
e
O
b
j
e
c
t
U
R
L
(
u
r
l
)
;


 
 
}
;




 
 
/
/
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─




 
 
i
f
 
(
!
r
e
s
u
l
t
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
t
e
x
t
-
c
e
n
t
e
r
 
p
y
-
8
 
t
e
x
t
-
[
1
1
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
4
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
5
0
0
"
>


 
 
 
 
 
 
 
 
/
 
r
u
n
 
y
o
u
r
 
q
u
e
r
y
 
t
o
 
s
e
e
 
r
e
s
u
l
t
s


 
 
 
 
 
 
<
/
d
i
v
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
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
{
/
*
 
S
t
a
t
u
s
 
b
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
p
x
-
3
 
p
y
-
2
 
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
5
0
/
4
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
2
"
>


 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
e
r
r
o
r
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
T
r
i
a
n
g
l
e
 
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
3
.
5
 
h
-
3
.
5
 
t
e
x
t
-
r
o
s
e
-
5
0
0
"
 
/
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
r
o
s
e
-
6
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
r
o
s
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
e
r
r
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
v
a
l
i
d
a
t
i
o
n
?
.
c
o
r
r
e
c
t
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
2
 
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
3
.
5
 
h
-
3
.
5
 
t
e
x
t
-
l
i
m
e
-
5
0
0
"
 
/
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
l
i
m
e
-
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
v
a
l
i
d
a
t
i
o
n
.
m
e
s
s
a
g
e
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
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
v
a
l
i
d
a
t
i
o
n
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
C
i
r
c
l
e
 
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
3
.
5
 
h
-
3
.
5
 
t
e
x
t
-
a
m
b
e
r
-
5
0
0
"
 
/
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
a
m
b
e
r
-
6
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
a
m
b
e
r
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
v
a
l
i
d
a
t
i
o
n
.
m
e
s
s
a
g
e
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
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
r
e
s
u
l
t
.
r
o
w
C
o
u
n
t
}
 
r
o
w
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
 
R
i
g
h
t
 
s
i
d
e
:
 
C
S
V
 
d
o
w
n
l
o
a
d
 
+
 
t
i
m
i
n
g
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
i
x
 
3
:
 
u
s
e
s
 
p
r
o
j
e
c
t
 
B
u
t
t
o
n
 
c
o
m
p
o
n
e
n
t
 
i
n
s
t
e
a
d
 
o
f
 
r
a
w
 
<
b
u
t
t
o
n
>
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
!
r
e
s
u
l
t
.
e
r
r
o
r
 
&
&
 
r
e
s
u
l
t
.
r
o
w
C
o
u
n
t
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
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
D
o
w
n
l
o
a
d
C
S
V
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
D
o
w
n
l
o
a
d
 
r
e
s
u
l
t
s
 
a
s
 
C
S
V
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
h
-
6
 
p
x
-
2
 
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
 
g
a
p
-
1
.
5
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
v
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
m
l
n
s
=
"
h
t
t
p
:
/
/
w
w
w
.
w
3
.
o
r
g
/
2
0
0
0
/
s
v
g
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
B
o
x
=
"
0
 
0
 
2
4
 
2
4
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
"
c
u
r
r
e
n
t
C
o
l
o
r
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
3
 
h
-
3
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
s
t
r
o
k
e
L
i
n
e
c
a
p
=
"
r
o
u
n
d
"
 
s
t
r
o
k
e
L
i
n
e
j
o
i
n
=
"
r
o
u
n
d
"
 
d
=
"
M
3
 
1
6
.
5
v
2
.
2
5
A
2
.
2
5
 
2
.
2
5
 
0
 
0
0
5
.
2
5
 
2
1
h
1
3
.
5
A
2
.
2
5
 
2
.
2
5
 
0
 
0
0
2
1
 
1
8
.
7
5
V
1
6
.
5
M
1
6
.
5
 
1
2
L
1
2
 
1
6
.
5
m
0
 
0
L
7
.
5
 
1
2
m
4
.
5
 
4
.
5
V
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
v
g
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
S
V


 
 
 
 
 
 
 
 
 
 
 
 
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
"
i
n
l
i
n
e
-
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
4
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
5
0
0
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
l
o
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
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
t
i
m
e
M
s
}
m
s


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
E
r
r
o
r
 
d
i
s
p
l
a
y
 
*
/
}


 
 
 
 
 
 
{
r
e
s
u
l
t
.
e
r
r
o
r
 
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
p
-
3
 
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
r
o
s
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
r
o
s
e
-
9
0
0
/
4
0
 
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
"
>


 
 
 
 
 
 
 
 
 
 
<
p
r
e
 
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
s
m
 
t
e
x
t
-
r
o
s
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
r
o
s
e
-
3
0
0
 
w
h
i
t
e
s
p
a
c
e
-
p
r
e
-
w
r
a
p
 
f
o
n
t
-
m
o
n
o
"
>
{
r
e
s
u
l
t
.
e
r
r
o
r
}
<
/
p
r
e
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
R
e
s
u
l
t
s
 
g
r
i
d
 
*
/
}


 
 
 
 
 
 
{
!
r
e
s
u
l
t
.
e
r
r
o
r
 
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
{
s
h
o
w
E
x
p
e
c
t
e
d
 
&
&
 
e
x
p
e
c
t
e
d
O
u
t
p
u
t
 
?
 
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
 
m
d
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
3
"
 
:
 
"
"
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
U
s
e
r
 
o
u
t
p
u
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
"
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
E
x
p
e
c
t
e
d
 
&
&
 
e
x
p
e
c
t
e
d
O
u
t
p
u
t
 
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
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
o
u
r
 
o
u
t
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
s
u
l
t
T
a
b
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
u
m
n
s
=
{
r
e
s
u
l
t
.
c
o
l
u
m
n
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
r
e
s
u
l
t
.
r
o
w
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
=
{
v
a
l
i
d
a
t
i
o
n
 
&
&
 
!
v
a
l
i
d
a
t
i
o
n
.
c
o
r
r
e
c
t
 
?
 
"
e
r
r
o
r
"
 
:
 
v
a
l
i
d
a
t
i
o
n
?
.
c
o
r
r
e
c
t
 
?
 
"
s
u
c
c
e
s
s
"
 
:
 
u
n
d
e
f
i
n
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
E
x
p
e
c
t
e
d
 
o
u
t
p
u
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
E
x
p
e
c
t
e
d
 
&
&
 
e
x
p
e
c
t
e
d
O
u
t
p
u
t
 
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
s
p
a
c
e
-
y
-
2
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
2
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
b
g
-
s
t
o
n
e
-
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
p
e
c
t
e
d
 
o
u
t
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
R
e
s
u
l
t
T
a
b
l
e
 
c
o
l
u
m
n
s
=
{
e
x
p
e
c
t
e
d
O
u
t
p
u
t
.
c
o
l
u
m
n
s
}
 
r
o
w
s
=
{
e
x
p
e
c
t
e
d
O
u
t
p
u
t
.
r
o
w
s
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
)
}


 
 
 
 
<
/
d
i
v
>


 
 
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
 
R
e
s
u
l
t
T
a
b
l
e
(
{


 
 
c
o
l
u
m
n
s
,


 
 
r
o
w
s
,


 
 
h
i
g
h
l
i
g
h
t
,


}
:
 
{


 
 
c
o
l
u
m
n
s
:
 
s
t
r
i
n
g
[
]
;


 
 
r
o
w
s
:
 
(
s
t
r
i
n
g
 
|
 
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
)
[
]
[
]
;


 
 
h
i
g
h
l
i
g
h
t
?
:
 
"
s
u
c
c
e
s
s
"
 
|
 
"
e
r
r
o
r
"
;


}
)
 
{


 
 
i
f
 
(
c
o
l
u
m
n
s
.
l
e
n
g
t
h
 
=
=
=
 
0
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
t
e
x
t
-
[
1
1
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
4
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
5
0
0
 
p
y
-
4
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
/
 
n
o
 
r
e
s
u
l
t
s


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
c
o
n
s
t
 
b
o
r
d
e
r
C
o
l
o
r
 
=
 
h
i
g
h
l
i
g
h
t
 
=
=
=
 
"
s
u
c
c
e
s
s
"


 
 
 
 
?
 
"
b
o
r
d
e
r
-
l
i
m
e
-
3
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
l
i
m
e
-
9
0
0
/
5
0
"


 
 
 
 
:
 
h
i
g
h
l
i
g
h
t
 
=
=
=
 
"
e
r
r
o
r
"


 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
a
m
b
e
r
-
3
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
a
m
b
e
r
-
9
0
0
/
5
0
"


 
 
 
 
 
 
:
 
"
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
"
;




 
 
r
e
t
u
r
n
 
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
{
`
b
o
r
d
e
r
 
$
{
b
o
r
d
e
r
C
o
l
o
r
}
 
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
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
 
m
a
x
-
h
-
6
4
"
>


 
 
 
 
 
 
 
 
<
t
a
b
l
e
 
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
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
d
 
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
s
t
i
c
k
y
 
t
o
p
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
5
0
/
4
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
l
u
m
n
s
.
m
a
p
(
(
c
o
l
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
l
e
f
t
 
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
 
w
h
i
t
e
s
p
a
c
e
-
n
o
w
r
a
p
 
b
o
r
d
e
r
-
b
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
w
s
.
s
l
i
c
e
(
0
,
 
1
0
0
)
.
m
a
p
(
(
r
o
w
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
o
r
d
e
r
-
b
 
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
1
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
5
 
l
a
s
t
:
b
o
r
d
e
r
-
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
s
t
o
n
e
-
5
0
/
5
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
w
h
i
t
e
/
5
 
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
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
w
.
m
a
p
(
(
c
e
l
l
,
 
j
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
j
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
p
x
-
3
 
p
y
-
1
.
5
 
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
3
0
0
 
w
h
i
t
e
s
p
a
c
e
-
n
o
w
r
a
p
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
x
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
e
l
l
 
=
=
=
 
n
u
l
l
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
t
o
n
e
-
3
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
6
0
0
 
i
t
a
l
i
c
"
>
N
U
L
L
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
t
r
i
n
g
(
c
e
l
l
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
>


 
 
 
 
 
 
 
 
{
r
o
w
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
0
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
p
x
-
3
 
p
y
-
2
 
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
4
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
5
0
0
 
t
e
x
t
-
c
e
n
t
e
r
 
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
5
0
/
4
0
 
b
o
r
d
e
r
-
t
 
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
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
/
 
s
h
o
w
i
n
g
 
1
0
0
 
o
f
 
{
r
o
w
s
.
l
e
n
g
t
h
}
 
r
o
w
s


 
 
 
 
 
 
 
 
 
 
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
d
i
v
>


 
 
)
;


}
