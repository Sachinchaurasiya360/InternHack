
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
S
t
a
t
e
,
 
u
s
e
R
e
f
 
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
 
g
e
t
S
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
-
c
o
l
o
r
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
P
a
r
a
m
s
,
 
u
s
e
N
a
v
i
g
a
t
e
,
 
L
i
n
k
 
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
-
r
o
u
t
e
r
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
r
r
o
w
L
e
f
t
,
 
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
,
 
C
l
o
c
k
,
 
C
i
r
c
l
e
,
 
S
e
n
d
,
 
E
x
t
e
r
n
a
l
L
i
n
k
,
 
C
a
l
e
n
d
a
r
 
a
s
 
C
a
l
e
n
d
a
r
I
c
o
n
,
 
D
o
w
n
l
o
a
d
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
 
u
s
e
Q
u
e
r
y
,
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
"
;


i
m
p
o
r
t
 
{
 
D
y
n
a
m
i
c
F
i
e
l
d
R
e
n
d
e
r
e
r
 
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
D
y
n
a
m
i
c
F
i
e
l
d
R
e
n
d
e
r
e
r
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
s
s
e
s
s
m
e
n
t
T
e
s
t
V
i
e
w
 
}
 
f
r
o
m
 
"
.
/
A
s
s
e
s
s
m
e
n
t
T
e
s
t
V
i
e
w
"
;


i
m
p
o
r
t
 
t
o
a
s
t
 
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
t
o
a
s
t
"
;


i
m
p
o
r
t
 
a
p
i
 
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
x
i
o
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
 
q
u
e
r
y
K
e
y
s
 
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
q
u
e
r
y
-
k
e
y
s
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
 
A
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
,
 
C
u
s
t
o
m
F
i
e
l
d
D
e
f
i
n
i
t
i
o
n
,
 
A
s
s
e
s
s
m
e
n
t
Q
u
e
s
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
 
L
o
a
d
i
n
g
S
c
r
e
e
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
L
o
a
d
i
n
g
S
c
r
e
e
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
m
p
o
r
t
 
{
 
g
o
o
g
l
e
C
a
l
e
n
d
a
r
U
r
l
,
 
d
o
w
n
l
o
a
d
I
C
S
 
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
c
a
l
e
n
d
a
r
"
;




f
u
n
c
t
i
o
n
 
g
e
t
D
e
a
d
l
i
n
e
B
a
n
n
e
r
(
d
e
a
d
l
i
n
e
:
 
s
t
r
i
n
g
)
:
 
{
 
l
e
v
e
l
:
 
"
w
a
r
n
i
n
g
"
 
|
 
"
c
r
i
t
i
c
a
l
"
 
|
 
n
u
l
l
;
 
d
a
y
s
L
e
f
t
:
 
n
u
m
b
e
r
 
}
 
{


 
 
c
o
n
s
t
 
n
o
w
 
=
 
n
e
w
 
D
a
t
e
(
)
;


 
 
c
o
n
s
t
 
d
e
a
d
l
i
n
e
D
a
t
e
 
=
 
n
e
w
 
D
a
t
e
(
d
e
a
d
l
i
n
e
)
;


 
 
c
o
n
s
t
 
d
i
f
f
M
s
 
=
 
d
e
a
d
l
i
n
e
D
a
t
e
.
g
e
t
T
i
m
e
(
)
 
-
 
n
o
w
.
g
e
t
T
i
m
e
(
)
;


 
 
c
o
n
s
t
 
d
a
y
s
L
e
f
t
 
=
 
M
a
t
h
.
c
e
i
l
(
d
i
f
f
M
s
 
/
 
(
1
0
0
0
 
*
 
6
0
 
*
 
6
0
 
*
 
2
4
)
)
;


 
 
i
f
 
(
d
a
y
s
L
e
f
t
 
<
 
0
)
 
r
e
t
u
r
n
 
{
 
l
e
v
e
l
:
 
n
u
l
l
,
 
d
a
y
s
L
e
f
t
 
}
;


 
 
i
f
 
(
d
a
y
s
L
e
f
t
 
<
=
 
2
)
 
r
e
t
u
r
n
 
{
 
l
e
v
e
l
:
 
"
c
r
i
t
i
c
a
l
"
,
 
d
a
y
s
L
e
f
t
 
}
;


 
 
i
f
 
(
d
a
y
s
L
e
f
t
 
<
=
 
7
)
 
r
e
t
u
r
n
 
{
 
l
e
v
e
l
:
 
"
w
a
r
n
i
n
g
"
,
 
d
a
y
s
L
e
f
t
 
}
;


 
 
r
e
t
u
r
n
 
{
 
l
e
v
e
l
:
 
n
u
l
l
,
 
d
a
y
s
L
e
f
t
 
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
 
A
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
P
r
o
g
r
e
s
s
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
{
 
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
I
d
 
}
 
=
 
u
s
e
P
a
r
a
m
s
(
)
;


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
[
a
c
t
i
v
e
R
o
u
n
d
I
d
,
 
s
e
t
A
c
t
i
v
e
R
o
u
n
d
I
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


 
 
c
o
n
s
t
 
[
f
i
e
l
d
A
n
s
w
e
r
s
,
 
s
e
t
F
i
e
l
d
A
n
s
w
e
r
s
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
<
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
u
n
k
n
o
w
n
>
>
(
{
}
)
;


 
 
c
o
n
s
t
 
[
s
u
b
m
i
t
t
i
n
g
,
 
s
e
t
S
u
b
m
i
t
t
i
n
g
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
 
[
s
u
b
m
i
t
E
r
r
o
r
,
 
s
e
t
S
u
b
m
i
t
E
r
r
o
r
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
<
s
t
r
i
n
g
 
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


 
 
c
o
n
s
t
 
l
a
s
t
P
a
y
l
o
a
d
 
=
 
u
s
e
R
e
f
<
{
 
r
o
u
n
d
I
d
:
 
n
u
m
b
e
r
;
 
a
n
s
w
e
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
u
n
k
n
o
w
n
>
 
}
 
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




 
 
c
o
n
s
t
 
q
u
e
r
y
C
l
i
e
n
t
 
=
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
(
)
;


 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
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
:
 
l
o
a
d
i
n
g
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
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
s
.
p
r
o
g
r
e
s
s
(
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
I
d
!
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
(
`
/
s
t
u
d
e
n
t
/
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
s
/
$
{
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
I
d
}
`
)
.
t
h
e
n
(
(
r
e
s
)
 
=
>
 
r
e
s
.
d
a
t
a
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
 
a
s
 
A
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
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
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
I
d
,


 
 
}
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
S
u
b
m
i
t
R
o
u
n
d
 
=
 
a
s
y
n
c
 
(
r
o
u
n
d
I
d
:
 
n
u
m
b
e
r
,
 
o
v
e
r
r
i
d
e
A
n
s
w
e
r
s
?
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
u
n
k
n
o
w
n
>
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
a
n
s
w
e
r
s
 
=
 
o
v
e
r
r
i
d
e
A
n
s
w
e
r
s
 
?
?
 
f
i
e
l
d
A
n
s
w
e
r
s
;


 
 
 
 
l
a
s
t
P
a
y
l
o
a
d
.
c
u
r
r
e
n
t
 
=
 
{
 
r
o
u
n
d
I
d
,
 
a
n
s
w
e
r
s
 
}
;


 
 
 
 
s
e
t
S
u
b
m
i
t
t
i
n
g
(
t
r
u
e
)
;


 
 
 
 
s
e
t
S
u
b
m
i
t
E
r
r
o
r
(
n
u
l
l
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(
`
/
s
t
u
d
e
n
t
/
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
s
/
$
{
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
I
d
}
/
r
o
u
n
d
s
/
$
{
r
o
u
n
d
I
d
}
/
s
u
b
m
i
t
`
,
 
{


 
 
 
 
 
 
 
 
f
i
e
l
d
A
n
s
w
e
r
s
:
 
a
n
s
w
e
r
s
,


 
 
 
 
 
 
 
 
a
t
t
a
c
h
m
e
n
t
s
:
 
[
]
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
s
e
t
A
c
t
i
v
e
R
o
u
n
d
I
d
(
n
u
l
l
)
;


 
 
 
 
 
 
s
e
t
F
i
e
l
d
A
n
s
w
e
r
s
(
{
}
)
;


 
 
 
 
 
 
l
a
s
t
P
a
y
l
o
a
d
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


 
 
 
 
 
 
q
u
e
r
y
C
l
i
e
n
t
.
i
n
v
a
l
i
d
a
t
e
Q
u
e
r
i
e
s
(
{
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
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
s
.
p
r
o
g
r
e
s
s
(
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
I
d
!
)
 
}
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
s
e
t
S
u
b
m
i
t
E
r
r
o
r
(
"
S
u
b
m
i
s
s
i
o
n
 
f
a
i
l
e
d
.
 
P
l
e
a
s
e
 
t
r
y
 
a
g
a
i
n
.
"
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
S
u
b
m
i
t
t
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
;




 
 
i
f
 
(
l
o
a
d
i
n
g
)
 
r
e
t
u
r
n
 
<
L
o
a
d
i
n
g
S
c
r
e
e
n
 
/
>
;


 
 
i
f
 
(
!
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
)
 
r
e
t
u
r
n
 
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
5
0
0
"
>
A
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
 
n
o
t
 
f
o
u
n
d
<
/
d
i
v
>
;




 
 
c
o
n
s
t
 
r
o
u
n
d
s
 
=
 
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
.
j
o
b
?
.
r
o
u
n
d
s
 
|
|
 
[
]
;


 
 
c
o
n
s
t
 
s
u
b
m
i
s
s
i
o
n
s
 
=
 
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
.
r
o
u
n
d
S
u
b
m
i
s
s
i
o
n
s
 
|
|
 
[
]
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
"
m
a
x
-
w
-
3
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
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
(
)
 
=
>
 
n
a
v
i
g
a
t
e
(
-
1
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
5
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
b
l
a
c
k
 
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
w
h
i
t
e
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
<
A
r
r
o
w
L
e
f
t
 
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
 
B
a
c
k


 
 
 
 
 
 
<
/
B
u
t
t
o
n
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
m
b
-
6
"
>


 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
{
`
/
s
t
u
d
e
n
t
/
j
o
b
s
/
$
{
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
.
j
o
b
I
d
}
`
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
2
 
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
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
9
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
i
n
d
i
g
o
-
6
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
i
n
d
i
g
o
-
4
0
0
 
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
 
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
{
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
.
j
o
b
?
.
t
i
t
l
e
}
 
<
E
x
t
e
r
n
a
l
L
i
n
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
5
 
h
-
5
"
 
/
>


 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
g
r
a
y
-
5
0
0
"
>
{
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
.
j
o
b
?
.
c
o
m
p
a
n
y
}
<
/
p
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
3
 
m
t
-
2
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
i
n
l
i
n
e
-
b
l
o
c
k
 
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
m
e
d
i
u
m
 
$
{
g
e
t
S
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
(
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
.
s
t
a
t
u
s
)
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
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
.
s
t
a
t
u
s
}


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
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
.
j
o
b
?
.
d
e
a
d
l
i
n
e
 
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
m
 
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
5
0
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
1
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
4
 
h
-
4
"
 
/
>
 
D
e
a
d
l
i
n
e
:
 
{
n
e
w
 
D
a
t
e
(
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
.
j
o
b
.
d
e
a
d
l
i
n
e
)
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
u
t
l
i
n
e
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
7
 
t
e
x
t
-
x
s
 
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
(
)
 
=
>
 
w
i
n
d
o
w
.
o
p
e
n
(
g
o
o
g
l
e
C
a
l
e
n
d
a
r
U
r
l
(
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
`
$
{
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
.
j
o
b
?
.
t
i
t
l
e
}
 
@
 
$
{
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
.
j
o
b
?
.
c
o
m
p
a
n
y
}
 
—
 
A
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
 
D
e
a
d
l
i
n
e
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
t
a
i
l
s
:
 
`
A
p
p
l
i
e
d
 
v
i
a
 
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
:
 
h
t
t
p
s
:
/
/
i
n
t
e
r
n
h
a
c
k
.
x
y
z
/
s
t
u
d
e
n
t
/
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
s
/
$
{
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
.
i
d
}
\
\
n
C
o
m
p
a
n
y
:
 
$
{
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
.
j
o
b
?
.
c
o
m
p
a
n
y
}
\
\
n
R
o
l
e
:
 
$
{
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
.
j
o
b
?
.
t
i
t
l
e
}
\
\
n
L
o
c
a
t
i
o
n
:
 
$
{
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
.
j
o
b
?
.
l
o
c
a
t
i
o
n
 
|
|
 
"
R
e
m
o
t
e
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
r
t
:
 
n
e
w
 
D
a
t
e
(
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
.
j
o
b
?
.
d
e
a
d
l
i
n
e
 
?
?
 
"
"
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
n
d
:
 
n
e
w
 
D
a
t
e
(
n
e
w
 
D
a
t
e
(
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
.
j
o
b
?
.
d
e
a
d
l
i
n
e
 
?
?
 
"
"
)
.
g
e
t
T
i
m
e
(
)
 
+
 
3
0
 
*
 
6
0
0
0
0
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
,
 
'
_
b
l
a
n
k
'
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
l
e
n
d
a
r
I
c
o
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
w
-
3
 
h
-
3
"
 
/
>
 
G
o
o
g
l
e
 
C
a
l
e
n
d
a
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
u
t
l
i
n
e
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
7
 
t
e
x
t
-
x
s
 
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
(
)
 
=
>
 
d
o
w
n
l
o
a
d
I
C
S
(
`
/
s
t
u
d
e
n
t
/
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
s
/
$
{
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
.
i
d
}
/
c
a
l
e
n
d
a
r
.
i
c
s
?
t
y
p
e
=
d
e
a
d
l
i
n
e
`
,
 
'
d
e
a
d
l
i
n
e
.
i
c
s
'
)
.
c
a
t
c
h
(
(
)
 
=
>
 
t
o
a
s
t
.
e
r
r
o
r
(
'
F
a
i
l
e
d
 
t
o
 
d
o
w
n
l
o
a
d
 
.
i
c
s
 
f
i
l
e
'
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
D
o
w
n
l
o
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
w
-
3
 
h
-
3
"
 
/
>
 
.
i
c
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
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




 
 
 
 
 
 
{
/
*
 
D
e
a
d
l
i
n
e
 
u
r
g
e
n
c
y
 
b
a
n
n
e
r
 
*
/
}


 
 
 
 
 
 
{
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
.
j
o
b
?
.
d
e
a
d
l
i
n
e
 
&
&
 
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
a
n
n
e
r
 
=
 
g
e
t
D
e
a
d
l
i
n
e
B
a
n
n
e
r
(
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
.
j
o
b
!
.
d
e
a
d
l
i
n
e
!
)
;


 
 
 
 
 
 
 
 
i
f
 
(
!
b
a
n
n
e
r
.
l
e
v
e
l
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
r
i
t
i
c
a
l
 
=
 
b
a
n
n
e
r
.
l
e
v
e
l
 
=
=
=
 
"
c
r
i
t
i
c
a
l
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
m
b
-
6
 
p
-
4
 
r
o
u
n
d
e
d
-
l
g
 
b
o
r
d
e
r
 
$
{
i
s
C
r
i
t
i
c
a
l
 
?
 
"
b
o
r
d
e
r
-
r
e
d
-
3
0
0
 
b
g
-
r
e
d
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
r
e
d
-
9
5
0
/
4
0
 
t
e
x
t
-
r
e
d
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
e
d
-
4
0
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
a
m
b
e
r
-
3
0
0
 
b
g
-
a
m
b
e
r
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
a
m
b
e
r
-
9
5
0
/
4
0
 
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
s
t
a
r
t
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
r
i
t
i
c
a
l
 
?
 
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
5
 
h
-
5
 
m
t
-
0
.
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
5
0
0
"
 
/
>
 
:
 
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
5
 
h
-
5
 
m
t
-
0
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
-
1
"
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
f
o
n
t
-
m
e
d
i
u
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
r
i
t
i
c
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
`
D
e
a
d
l
i
n
e
 
$
{
b
a
n
n
e
r
.
d
a
y
s
L
e
f
t
 
=
=
=
 
0
 
?
 
"
i
s
 
t
o
d
a
y
"
 
:
 
`
i
s
 
i
n
 
$
{
b
a
n
n
e
r
.
d
a
y
s
L
e
f
t
}
 
d
a
y
$
{
b
a
n
n
e
r
.
d
a
y
s
L
e
f
t
 
!
=
=
 
1
 
?
 
"
s
"
 
:
 
"
"
}
`
}
`


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
`
D
e
a
d
l
i
n
e
 
i
s
 
i
n
 
$
{
b
a
n
n
e
r
.
d
a
y
s
L
e
f
t
}
 
d
a
y
$
{
b
a
n
n
e
r
.
d
a
y
s
L
e
f
t
 
!
=
=
 
1
 
?
 
"
s
"
 
:
 
"
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
s
m
 
m
t
-
1
 
o
p
a
c
i
t
y
-
8
0
"
>
S
u
b
m
i
t
 
y
o
u
r
 
r
o
u
n
d
s
 
b
e
f
o
r
e
 
t
h
e
 
d
e
a
d
l
i
n
e
 
t
o
 
a
v
o
i
d
 
m
i
s
s
i
n
g
 
t
h
i
s
 
o
p
p
o
r
t
u
n
i
t
y
.
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
{
i
s
C
r
i
t
i
c
a
l
 
?
 
"
m
o
n
o
"
 
:
 
"
o
u
t
l
i
n
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
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
s
h
r
i
n
k
-
0
 
h
-
8
 
t
e
x
t
-
x
s
 
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
(
)
 
=
>
 
w
i
n
d
o
w
.
o
p
e
n
(
g
o
o
g
l
e
C
a
l
e
n
d
a
r
U
r
l
(
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
`
$
{
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
.
j
o
b
?
.
t
i
t
l
e
}
 
@
 
$
{
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
.
j
o
b
?
.
c
o
m
p
a
n
y
}
 
—
 
A
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
 
D
e
a
d
l
i
n
e
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
t
a
i
l
s
:
 
`
A
p
p
l
i
e
d
 
v
i
a
 
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
:
 
h
t
t
p
s
:
/
/
i
n
t
e
r
n
h
a
c
k
.
x
y
z
/
s
t
u
d
e
n
t
/
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
s
/
$
{
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
.
i
d
}
\
\
n
C
o
m
p
a
n
y
:
 
$
{
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
.
j
o
b
?
.
c
o
m
p
a
n
y
}
\
\
n
R
o
l
e
:
 
$
{
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
.
j
o
b
?
.
t
i
t
l
e
}
\
\
n
L
o
c
a
t
i
o
n
:
 
$
{
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
.
j
o
b
?
.
l
o
c
a
t
i
o
n
 
|
|
 
"
R
e
m
o
t
e
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
r
t
:
 
n
e
w
 
D
a
t
e
(
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
.
j
o
b
?
.
d
e
a
d
l
i
n
e
 
?
?
 
"
"
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
n
d
:
 
n
e
w
 
D
a
t
e
(
n
e
w
 
D
a
t
e
(
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
.
j
o
b
?
.
d
e
a
d
l
i
n
e
 
?
?
 
"
"
)
.
g
e
t
T
i
m
e
(
)
 
+
 
3
0
 
*
 
6
0
0
0
0
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
,
 
'
_
b
l
a
n
k
'
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
l
e
n
d
a
r
I
c
o
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
"
 
/
>
 
A
d
d
 
t
o
 
C
a
l
e
n
d
a
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
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


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
(
)
}




 
 
 
 
 
 
{
/
*
 
R
o
u
n
d
 
P
r
o
g
r
e
s
s
 
T
i
m
e
l
i
n
e
 
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
4
"
>


 
 
 
 
 
 
 
 
{
r
o
u
n
d
s
.
m
a
p
(
(
r
o
u
n
d
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
 
s
u
b
m
i
s
s
i
o
n
 
=
 
s
u
b
m
i
s
s
i
o
n
s
.
f
i
n
d
(
(
s
)
 
=
>
 
s
.
r
o
u
n
d
I
d
 
=
=
=
 
r
o
u
n
d
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
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
.
c
u
r
r
e
n
t
R
o
u
n
d
I
d
 
=
=
=
 
r
o
u
n
d
.
i
d
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
m
p
l
e
t
e
d
 
=
 
s
u
b
m
i
s
s
i
o
n
?
.
s
t
a
t
u
s
 
=
=
=
 
"
C
O
M
P
L
E
T
E
D
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
P
e
n
d
i
n
g
 
=
 
!
s
u
b
m
i
s
s
i
o
n
 
|
|
 
s
u
b
m
i
s
s
i
o
n
.
s
t
a
t
u
s
 
=
=
=
 
"
P
E
N
D
I
N
G
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
u
s
t
o
m
F
i
e
l
d
s
 
=
 
(
r
o
u
n
d
.
c
u
s
t
o
m
F
i
e
l
d
s
 
|
|
 
[
]
)
 
a
s
 
C
u
s
t
o
m
F
i
e
l
d
D
e
f
i
n
i
t
i
o
n
[
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
s
s
e
s
s
m
e
n
t
Q
u
e
s
t
i
o
n
s
 
=
 
(
r
o
u
n
d
.
a
s
s
e
s
s
m
e
n
t
Q
u
e
s
t
i
o
n
s
 
|
|
 
[
]
)
 
a
s
 
A
s
s
e
s
s
m
e
n
t
Q
u
e
s
t
i
o
n
[
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
h
a
s
A
s
s
e
s
s
m
e
n
t
 
=
 
a
s
s
e
s
s
m
e
n
t
Q
u
e
s
t
i
o
n
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
 
k
e
y
=
{
r
o
u
n
d
.
i
d
}
 
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
e
l
a
y
:
 
i
 
*
 
0
.
1
 
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
g
r
a
y
-
9
0
0
 
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
 
b
o
r
d
e
r
 
s
h
a
d
o
w
-
s
m
 
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
 
$
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
 
"
b
o
r
d
e
r
-
b
l
a
c
k
 
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
g
r
a
y
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
g
r
a
y
-
8
0
0
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
p
-
6
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
3
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
o
m
p
l
e
t
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
e
e
n
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
 
h
-
5
 
t
e
x
t
-
y
e
l
l
o
w
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
g
r
a
y
-
6
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
s
e
m
i
b
o
l
d
 
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
9
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
w
h
i
t
e
"
>
R
o
u
n
d
 
{
i
 
+
 
1
}
:
 
{
r
o
u
n
d
.
n
a
m
e
}
<
/
h
3
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
t
e
x
t
-
x
s
 
p
x
-
2
 
p
y
-
0
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
i
s
C
o
m
p
l
e
t
e
d
 
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
1
0
0
 
t
e
x
t
-
g
r
e
e
n
-
7
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
g
r
e
e
n
-
9
0
0
/
3
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
g
r
e
e
n
-
4
0
0
"
 
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
g
-
y
e
l
l
o
w
-
1
0
0
 
t
e
x
t
-
y
e
l
l
o
w
-
7
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
y
e
l
l
o
w
-
9
0
0
/
3
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
y
e
l
l
o
w
-
4
0
0
"
 
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
b
g
-
g
r
a
y
-
1
0
0
 
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
5
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
g
r
a
y
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
g
r
a
y
-
5
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
C
o
m
p
l
e
t
e
d
 
?
 
"
C
o
m
p
l
e
t
e
d
"
 
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
I
n
 
P
r
o
g
r
e
s
s
"
 
:
 
"
P
e
n
d
i
n
g
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
u
n
d
.
a
c
t
i
v
a
t
e
A
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
 
m
l
-
a
u
t
o
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
g
r
a
y
-
5
0
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
1
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
4
 
h
-
4
"
 
/
>
 
{
n
e
w
 
D
a
t
e
(
r
o
u
n
d
.
a
c
t
i
v
a
t
e
A
t
)
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
u
t
l
i
n
e
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
7
 
t
e
x
t
-
x
s
 
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
(
)
 
=
>
 
w
i
n
d
o
w
.
o
p
e
n
(
g
o
o
g
l
e
C
a
l
e
n
d
a
r
U
r
l
(
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
`
$
{
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
.
j
o
b
?
.
t
i
t
l
e
}
 
@
 
$
{
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
.
j
o
b
?
.
c
o
m
p
a
n
y
}
 
—
 
$
{
r
o
u
n
d
.
n
a
m
e
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
t
a
i
l
s
:
 
`
A
p
p
l
i
e
d
 
v
i
a
 
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
:
 
h
t
t
p
s
:
/
/
i
n
t
e
r
n
h
a
c
k
.
x
y
z
/
s
t
u
d
e
n
t
/
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
s
/
$
{
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
.
i
d
}
\
\
n
C
o
m
p
a
n
y
:
 
$
{
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
.
j
o
b
?
.
c
o
m
p
a
n
y
}
\
\
n
R
o
l
e
:
 
$
{
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
.
j
o
b
?
.
t
i
t
l
e
}
\
\
n
L
o
c
a
t
i
o
n
:
 
$
{
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
.
j
o
b
?
.
l
o
c
a
t
i
o
n
 
|
|
 
"
R
e
m
o
t
e
"
}
\
\
n
$
{
r
o
u
n
d
.
n
a
m
e
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
r
t
:
 
n
e
w
 
D
a
t
e
(
r
o
u
n
d
.
a
c
t
i
v
a
t
e
A
t
!
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
n
d
:
 
n
e
w
 
D
a
t
e
(
n
e
w
 
D
a
t
e
(
r
o
u
n
d
.
a
c
t
i
v
a
t
e
A
t
!
)
.
g
e
t
T
i
m
e
(
)
 
+
 
6
0
 
*
 
6
0
0
0
0
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
,
 
'
_
b
l
a
n
k
'
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
l
e
n
d
a
r
I
c
o
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
w
-
3
 
h
-
3
"
 
/
>
 
G
o
o
g
l
e
 
C
a
l
e
n
d
a
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
u
t
l
i
n
e
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
7
 
t
e
x
t
-
x
s
 
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
(
)
 
=
>
 
d
o
w
n
l
o
a
d
I
C
S
(
`
/
s
t
u
d
e
n
t
/
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
s
/
$
{
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
.
i
d
}
/
c
a
l
e
n
d
a
r
.
i
c
s
?
t
y
p
e
=
r
o
u
n
d
&
r
o
u
n
d
I
d
=
$
{
r
o
u
n
d
.
i
d
}
`
,
 
`
r
o
u
n
d
-
$
{
r
o
u
n
d
.
i
d
}
.
i
c
s
`
)
.
c
a
t
c
h
(
(
)
 
=
>
 
t
o
a
s
t
.
e
r
r
o
r
(
'
F
a
i
l
e
d
 
t
o
 
d
o
w
n
l
o
a
d
 
.
i
c
s
 
f
i
l
e
'
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
D
o
w
n
l
o
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
w
-
3
 
h
-
3
"
 
/
>
 
.
i
c
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
u
n
d
.
d
e
s
c
r
i
p
t
i
o
n
 
&
&
 
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
s
m
 
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
5
0
0
 
m
l
-
8
 
m
b
-
2
"
>
{
r
o
u
n
d
.
d
e
s
c
r
i
p
t
i
o
n
}
<
/
p
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
u
n
d
.
i
n
s
t
r
u
c
t
i
o
n
s
 
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
l
-
8
 
p
-
3
 
b
g
-
b
l
u
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
b
l
u
e
-
9
0
0
/
3
0
 
r
o
u
n
d
e
d
-
l
g
 
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
b
l
u
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
b
l
u
e
-
4
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
u
n
d
.
i
n
s
t
r
u
c
t
i
o
n
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
S
h
o
w
 
c
o
m
p
l
e
t
e
d
 
s
u
b
m
i
s
s
i
o
n
 
d
a
t
a
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
o
m
p
l
e
t
e
d
 
&
&
 
s
u
b
m
i
s
s
i
o
n
?
.
f
i
e
l
d
A
n
s
w
e
r
s
 
&
&
 
O
b
j
e
c
t
.
k
e
y
s
(
s
u
b
m
i
s
s
i
o
n
.
f
i
e
l
d
A
n
s
w
e
r
s
)
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
l
-
8
 
m
t
-
2
 
p
-
3
 
b
g
-
g
r
a
y
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
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
l
g
 
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
f
o
n
t
-
m
e
d
i
u
m
 
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
5
0
0
 
m
b
-
1
"
>
Y
o
u
r
 
S
u
b
m
i
s
s
i
o
n
:
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
s
u
b
m
i
s
s
i
o
n
.
f
i
e
l
d
A
n
s
w
e
r
s
)
.
m
a
p
(
(
[
k
e
y
,
 
v
a
l
]
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
k
e
y
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
g
r
a
y
-
4
0
0
"
>
{
k
e
y
}
:
 
{
S
t
r
i
n
g
(
v
a
l
)
}
<
/
d
i
v
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
c
t
i
v
e
 
r
o
u
n
d
:
 
s
h
o
w
 
f
o
r
m
 
o
r
 
a
s
s
e
s
s
m
e
n
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
c
t
i
v
e
 
&
&
 
!
i
s
C
o
m
p
l
e
t
e
d
 
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
l
-
8
 
m
t
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
E
r
r
o
r
 
b
a
n
n
e
r
 
s
h
o
w
n
 
f
o
r
 
B
O
T
H
 
a
s
s
e
s
s
m
e
n
t
 
a
n
d
 
c
u
s
t
o
m
 
f
i
e
l
d
 
s
u
b
m
i
s
s
i
o
n
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
u
b
m
i
t
E
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
 
a
r
i
a
-
l
i
v
e
=
"
p
o
l
i
t
e
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
3
 
p
-
3
 
m
b
-
3
 
b
g
-
r
e
d
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
r
e
d
-
9
0
0
/
3
0
 
r
o
u
n
d
e
d
-
l
g
 
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
e
d
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
e
d
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
s
u
b
m
i
t
E
r
r
o
r
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
o
n
o
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
"
R
e
t
r
y
 
s
u
b
m
i
s
s
i
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
u
b
m
i
t
t
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
l
a
s
t
P
a
y
l
o
a
d
.
c
u
r
r
e
n
t
 
&
&
 
h
a
n
d
l
e
S
u
b
m
i
t
R
o
u
n
d
(
l
a
s
t
P
a
y
l
o
a
d
.
c
u
r
r
e
n
t
.
r
o
u
n
d
I
d
,
 
l
a
s
t
P
a
y
l
o
a
d
.
c
u
r
r
e
n
t
.
a
n
s
w
e
r
s
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
u
b
m
i
t
t
i
n
g
 
?
 
"
R
e
t
r
y
i
n
g
.
.
.
"
 
:
 
"
R
e
t
r
y
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
R
o
u
n
d
I
d
 
=
=
=
 
r
o
u
n
d
.
i
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
a
s
A
s
s
e
s
s
m
e
n
t
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
s
s
e
s
s
m
e
n
t
T
e
s
t
V
i
e
w


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
q
u
e
s
t
i
o
n
s
=
{
a
s
s
e
s
s
m
e
n
t
Q
u
e
s
t
i
o
n
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
m
e
L
i
m
i
t
S
e
c
s
=
{
r
o
u
n
d
.
t
i
m
e
L
i
m
i
t
S
e
c
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
m
i
t
t
i
n
g
=
{
s
u
b
m
i
t
t
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
S
u
b
m
i
t
=
{
(
a
n
s
w
e
r
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
a
n
d
l
e
S
u
b
m
i
t
R
o
u
n
d
(
r
o
u
n
d
.
i
d
,
 
{
 
.
.
.
f
i
e
l
d
A
n
s
w
e
r
s
,
 
a
s
s
e
s
s
m
e
n
t
A
n
s
w
e
r
s
:
 
a
n
s
w
e
r
s
 
}
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
s
t
o
m
F
i
e
l
d
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
D
y
n
a
m
i
c
F
i
e
l
d
R
e
n
d
e
r
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
e
l
d
s
=
{
c
u
s
t
o
m
F
i
e
l
d
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
s
=
{
f
i
e
l
d
A
n
s
w
e
r
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
f
i
e
l
d
I
d
,
 
v
a
l
u
e
)
 
=
>
 
s
e
t
F
i
e
l
d
A
n
s
w
e
r
s
(
{
 
.
.
.
f
i
e
l
d
A
n
s
w
e
r
s
,
 
[
f
i
e
l
d
I
d
]
:
 
v
a
l
u
e
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
o
n
o
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
(
)
 
=
>
 
h
a
n
d
l
e
S
u
b
m
i
t
R
o
u
n
d
(
r
o
u
n
d
.
i
d
)
}
 
d
i
s
a
b
l
e
d
=
{
s
u
b
m
i
t
t
i
n
g
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
n
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
u
b
m
i
t
t
i
n
g
 
?
 
"
S
u
b
m
i
t
t
i
n
g
.
.
.
"
 
:
 
"
S
u
b
m
i
t
 
R
o
u
n
d
"
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
 
{
 
s
e
t
A
c
t
i
v
e
R
o
u
n
d
I
d
(
n
u
l
l
)
;
 
s
e
t
S
u
b
m
i
t
E
r
r
o
r
(
n
u
l
l
)
;
 
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
"
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
5
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
b
l
a
c
k
 
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
w
h
i
t
e
"
>
C
a
n
c
e
l
<
/
B
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
m
o
n
o
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
(
)
 
=
>
 
s
e
t
A
c
t
i
v
e
R
o
u
n
d
I
d
(
r
o
u
n
d
.
i
d
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
t
a
r
t
 
R
o
u
n
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
P
e
n
d
i
n
g
 
r
o
u
n
d
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
P
e
n
d
i
n
g
 
&
&
 
!
i
s
A
c
t
i
v
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
l
-
8
 
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
g
r
a
y
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
g
r
a
y
-
5
0
0
"
>
C
o
m
p
l
e
t
e
 
t
h
e
 
p
r
e
v
i
o
u
s
 
r
o
u
n
d
 
t
o
 
u
n
l
o
c
k
 
t
h
i
s
 
o
n
e
.
<
/
p
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
