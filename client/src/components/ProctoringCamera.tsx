
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
E
f
f
e
c
t
,
 
u
s
e
S
t
a
t
e
 
}
 
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
a
m
e
r
a
,
 
C
a
m
e
r
a
O
f
f
,
 
L
o
a
d
e
r
2
 
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
 
u
s
e
F
a
c
e
D
e
t
e
c
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
.
.
/
h
o
o
k
s
/
u
s
e
F
a
c
e
D
e
t
e
c
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
 
t
y
p
e
 
{
 
F
a
c
e
V
i
o
l
a
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
.
.
/
h
o
o
k
s
/
u
s
e
P
r
o
c
t
o
r
i
n
g
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


 
 
o
n
V
i
o
l
a
t
i
o
n
:
 
(
v
:
 
F
a
c
e
V
i
o
l
a
t
i
o
n
)
 
=
>
 
v
o
i
d
;


 
 
o
n
S
n
a
p
s
h
o
t
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
o
n
E
r
r
o
r
:
 
(
e
r
r
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
 
v
o
i
d
;


 
 
o
n
R
e
a
d
y
:
 
(
)
 
=
>
 
v
o
i
d
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
 
P
r
o
c
t
o
r
i
n
g
C
a
m
e
r
a
(
{
 
o
n
V
i
o
l
a
t
i
o
n
,
 
o
n
S
n
a
p
s
h
o
t
,
 
o
n
E
r
r
o
r
,
 
o
n
R
e
a
d
y
 
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
 
[
m
i
n
i
m
i
z
e
d
,
 
s
e
t
M
i
n
i
m
i
z
e
d
]
 
=
 
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
 
{


 
 
 
 
v
i
d
e
o
R
e
f
,


 
 
 
 
i
s
L
o
a
d
i
n
g
,


 
 
 
 
i
s
A
c
t
i
v
e
,


 
 
 
 
e
r
r
o
r
,


 
 
 
 
c
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
,


 
 
 
 
s
t
a
r
t
,


 
 
 
 
s
t
o
p
,


 
 
}
 
=
 
u
s
e
F
a
c
e
D
e
t
e
c
t
i
o
n
(
{


 
 
 
 
o
n
V
i
o
l
a
t
i
o
n
,


 
 
 
 
o
n
S
n
a
p
s
h
o
t
,


 
 
 
 
o
n
R
e
a
d
y
,


 
 
 
 
o
n
E
r
r
o
r
,


 
 
}
)
;




 
 
/
/
 
A
u
t
o
-
s
t
a
r
t
 
c
a
m
e
r
a
 
o
n
 
m
o
u
n
t
 
a
n
d
 
r
e
-
c
r
e
a
t
e
 
i
n
t
e
r
v
a
l
s
 
w
h
e
n
 
c
o
n
f
i
g
 
c
h
a
n
g
e
s


 
 
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


 
 
 
 
s
t
a
r
t
(
)
;


 
 
 
 
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
 
s
t
o
p
(
)
;


 
 
}
,
 
[
s
t
a
r
t
,
 
s
t
o
p
]
)
;




 
 
c
o
n
s
t
 
s
t
a
t
u
s
C
o
l
o
r
 
=


 
 
 
 
c
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
 
=
=
=
 
1


 
 
 
 
 
 
?
 
"
b
g
-
g
r
e
e
n
-
5
0
0
"


 
 
 
 
 
 
:
 
c
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
 
=
=
=
 
0


 
 
 
 
 
 
?
 
"
b
g
-
r
e
d
-
5
0
0
"


 
 
 
 
 
 
:
 
"
b
g
-
r
e
d
-
5
0
0
"
;




 
 
c
o
n
s
t
 
s
t
a
t
u
s
T
e
x
t
 
=


 
 
 
 
c
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
 
=
=
=
 
1


 
 
 
 
 
 
?
 
"
F
a
c
e
 
d
e
t
e
c
t
e
d
"


 
 
 
 
 
 
:
 
c
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
 
=
=
=
 
0


 
 
 
 
 
 
?
 
"
N
o
 
f
a
c
e
"


 
 
 
 
 
 
:
 
`
$
{
c
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
}
 
f
a
c
e
s
`
;




 
 
/
/
 
M
i
n
i
m
i
z
e
d
:
 
s
h
o
w
 
o
n
l
y
 
a
 
s
m
a
l
l
 
i
n
d
i
c
a
t
o
r
 
d
o
t


 
 
i
f
 
(
m
i
n
i
m
i
z
e
d
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
M
i
n
i
m
i
z
e
d
(
f
a
l
s
e
)
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
i
x
e
d
 
b
o
t
t
o
m
-
4
 
r
i
g
h
t
-
4
 
z
-
5
0
 
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
 
p
x
-
3
 
p
y
-
2
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
g
r
a
y
-
9
0
0
/
9
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
g
r
a
y
-
7
0
0
 
s
h
a
d
o
w
-
l
g
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
"


 
 
 
 
 
 
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
{
`
w
-
2
.
5
 
h
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
f
u
l
l
 
$
{
s
t
a
t
u
s
C
o
l
o
r
}
 
$
{
c
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
 
!
=
=
 
1
 
?
 
"
a
n
i
m
a
t
e
-
p
u
l
s
e
"
 
:
 
"
"
}
`
}
 
/
>


 
 
 
 
 
 
 
 
<
C
a
m
e
r
a
 
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
g
r
a
y
-
4
0
0
"
 
/
>


 
 
 
 
 
 
<
/
b
u
t
t
o
n
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
f
i
x
e
d
 
b
o
t
t
o
m
-
4
 
r
i
g
h
t
-
4
 
z
-
5
0
 
w
-
4
4
 
r
o
u
n
d
e
d
-
x
l
 
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
g
r
a
y
-
9
0
0
/
9
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
g
r
a
y
-
7
0
0
 
s
h
a
d
o
w
-
l
g
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
"
>


 
 
 
 
 
 
{
/
*
 
V
i
d
e
o
 
a
r
e
a
 
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
r
e
l
a
t
i
v
e
 
a
s
p
e
c
t
-
v
i
d
e
o
 
b
g
-
g
r
a
y
-
9
5
0
"
>


 
 
 
 
 
 
 
 
{
i
s
L
o
a
d
i
n
g
 
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
a
d
e
r
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
5
 
h
-
5
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
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




 
 
 
 
 
 
 
 
{
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
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
 
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
m
e
r
a
O
f
f
 
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
 
t
e
x
t
-
r
e
d
-
4
0
0
 
m
b
-
1
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
 
t
e
x
t
-
r
e
d
-
4
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
"
>
{
e
r
r
o
r
}
<
/
p
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
v
i
d
e
o


 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
v
i
d
e
o
R
e
f
}


 
 
 
 
 
 
 
 
 
 
a
u
t
o
P
l
a
y


 
 
 
 
 
 
 
 
 
 
p
l
a
y
s
I
n
l
i
n
e


 
 
 
 
 
 
 
 
 
 
m
u
t
e
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
 
s
c
a
l
e
-
x
-
[
-
1
]
"


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
i
s
A
c
t
i
v
e
 
?
 
"
b
l
o
c
k
"
 
:
 
"
n
o
n
e
"
 
}
}


 
 
 
 
 
 
 
 
/
>




 
 
 
 
 
 
 
 
{
/
*
 
M
i
n
i
m
i
z
e
 
b
u
t
t
o
n
 
*
/
}


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
M
i
n
i
m
i
z
e
d
(
t
r
u
e
)
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
a
b
s
o
l
u
t
e
 
t
o
p
-
1
 
r
i
g
h
t
-
1
 
w
-
5
 
h
-
5
 
r
o
u
n
d
e
d
 
b
g
-
b
l
a
c
k
/
5
0
 
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
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
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
[
1
0
p
x
]
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
-


 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
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
 
g
a
p
-
1
.
5
 
p
x
-
2
.
5
 
p
y
-
1
.
5
"
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
{
`
w
-
2
 
h
-
2
 
r
o
u
n
d
e
d
-
f
u
l
l
 
s
h
r
i
n
k
-
0
 
$
{
s
t
a
t
u
s
C
o
l
o
r
}
 
$
{
c
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
 
!
=
=
 
1
 
?
 
"
a
n
i
m
a
t
e
-
p
u
l
s
e
"
 
:
 
"
"
}
`
}
 
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
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
t
r
u
n
c
a
t
e
"
>
{
i
s
A
c
t
i
v
e
 
?
 
s
t
a
t
u
s
T
e
x
t
 
:
 
"
S
t
a
r
t
i
n
g
.
.
.
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
/
d
i
v
>


 
 
)
;


}


