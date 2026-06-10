
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
r
r
o
w
L
e
f
t
,
 
M
a
i
l
,
 
P
h
o
n
e
,
 
B
u
i
l
d
i
n
g
2
,
 
B
r
i
e
f
c
a
s
e
,
 
F
i
l
e
T
e
x
t
,
 
S
c
a
n
S
e
a
r
c
h
,
 
M
a
p
P
i
n
,
 
G
r
a
d
u
a
t
i
o
n
C
a
p
,
 
G
l
o
b
e
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
r
o
w
n
,
 
S
h
i
e
l
d
,
 
A
w
a
r
d
,
 
S
t
a
r
,
 
M
e
s
s
a
g
e
C
i
r
c
l
e
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
 
X
C
i
r
c
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
 
{
 
S
E
O
 
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
S
E
O
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
j
e
c
t
I
t
e
m
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
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
:
 
s
t
r
i
n
g
;


 
 
t
e
c
h
S
t
a
c
k
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


 
 
l
i
v
e
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
r
e
p
o
U
r
l
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




i
n
t
e
r
f
a
c
e
 
A
c
h
i
e
v
e
m
e
n
t
I
t
e
m
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
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
:
 
s
t
r
i
n
g
;


 
 
d
a
t
e
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




i
n
t
e
r
f
a
c
e
 
U
s
e
r
D
e
t
a
i
l
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
e
m
a
i
l
:
 
s
t
r
i
n
g
;


 
 
r
o
l
e
:
 
s
t
r
i
n
g
;


 
 
i
s
A
c
t
i
v
e
:
 
b
o
o
l
e
a
n
;


 
 
i
s
P
r
o
f
i
l
e
P
u
b
l
i
c
:
 
b
o
o
l
e
a
n
;


 
 
i
s
V
e
r
i
f
i
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


 
 
c
o
n
t
a
c
t
N
o
?
:
 
s
t
r
i
n
g
;


 
 
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
:
 
s
t
r
i
n
g
;


 
 
c
o
v
e
r
I
m
a
g
e
?
:
 
s
t
r
i
n
g
;


 
 
r
e
s
u
m
e
s
?
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


 
 
c
o
m
p
a
n
y
?
:
 
s
t
r
i
n
g
;


 
 
d
e
s
i
g
n
a
t
i
o
n
?
:
 
s
t
r
i
n
g
;


 
 
/
/
 
S
u
b
s
c
r
i
p
t
i
o
n


 
 
s
u
b
s
c
r
i
p
t
i
o
n
P
l
a
n
:
 
s
t
r
i
n
g
;


 
 
s
u
b
s
c
r
i
p
t
i
o
n
S
t
a
t
u
s
:
 
s
t
r
i
n
g
;


 
 
s
u
b
s
c
r
i
p
t
i
o
n
S
t
a
r
t
D
a
t
e
?
:
 
s
t
r
i
n
g
;


 
 
s
u
b
s
c
r
i
p
t
i
o
n
E
n
d
D
a
t
e
?
:
 
s
t
r
i
n
g
;


 
 
/
/
 
S
t
u
d
e
n
t
 
p
r
o
f
i
l
e


 
 
b
i
o
?
:
 
s
t
r
i
n
g
;


 
 
c
o
l
l
e
g
e
?
:
 
s
t
r
i
n
g
;


 
 
g
r
a
d
u
a
t
i
o
n
Y
e
a
r
?
:
 
n
u
m
b
e
r
;


 
 
s
k
i
l
l
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


 
 
l
o
c
a
t
i
o
n
?
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
S
t
a
t
u
s
?
:
 
s
t
r
i
n
g
;


 
 
l
i
n
k
e
d
i
n
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
g
i
t
h
u
b
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
p
o
r
t
f
o
l
i
o
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
l
e
e
t
c
o
d
e
U
r
l
?
:
 
s
t
r
i
n
g
;


 
 
p
r
o
j
e
c
t
s
:
 
P
r
o
j
e
c
t
I
t
e
m
[
]
;


 
 
a
c
h
i
e
v
e
m
e
n
t
s
:
 
A
c
h
i
e
v
e
m
e
n
t
I
t
e
m
[
]
;


 
 
c
r
e
a
t
e
d
A
t
:
 
s
t
r
i
n
g
;


 
 
u
p
d
a
t
e
d
A
t
:
 
s
t
r
i
n
g
;


 
 
_
c
o
u
n
t
:
 
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
s
:
 
n
u
m
b
e
r
;


 
 
 
 
p
o
s
t
e
d
J
o
b
s
:
 
n
u
m
b
e
r
;


 
 
 
 
a
t
s
S
c
o
r
e
s
:
 
n
u
m
b
e
r
;


 
 
 
 
c
o
m
p
a
n
y
R
e
v
i
e
w
s
:
 
n
u
m
b
e
r
;


 
 
 
 
c
o
n
t
r
i
b
u
t
i
o
n
s
:
 
n
u
m
b
e
r
;


 
 
 
 
u
s
a
g
e
L
o
g
s
:
 
n
u
m
b
e
r
;


 
 
 
 
s
t
u
d
e
n
t
B
a
d
g
e
s
:
 
n
u
m
b
e
r
;


 
 
 
 
s
k
i
l
l
T
e
s
t
A
t
t
e
m
p
t
s
:
 
n
u
m
b
e
r
;


 
 
 
 
v
e
r
i
f
i
e
d
S
k
i
l
l
s
:
 
n
u
m
b
e
r
;


 
 
}
;


 
 
a
d
m
i
n
P
r
o
f
i
l
e
?
:
 
{
 
t
i
e
r
:
 
s
t
r
i
n
g
;
 
i
s
A
c
t
i
v
e
:
 
b
o
o
l
e
a
n
 
}
 
|
 
n
u
l
l
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
 
U
s
e
r
D
e
t
a
i
l
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
 
i
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
u
s
e
r
,
 
s
e
t
U
s
e
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
U
s
e
r
D
e
t
a
i
l
 
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
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
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
t
r
u
e
)
;




 
 
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
a
d
m
i
n
/
u
s
e
r
s
/
$
{
i
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
 
{


 
 
 
 
 
 
s
e
t
U
s
e
r
(
r
e
s
.
d
a
t
a
.
u
s
e
r
)
;


 
 
 
 
 
 
s
e
t
L
o
a
d
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
 
{


 
 
 
 
 
 
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
"
U
s
e
r
 
n
o
t
 
f
o
u
n
d
"
)
;


 
 
 
 
 
 
s
e
t
L
o
a
d
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
)
;


 
 
}
,
 
[
i
d
]
)
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
S
t
a
t
u
s
 
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


 
 
 
 
i
f
 
(
!
u
s
e
r
)
 
r
e
t
u
r
n
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
a
t
c
h
(
`
/
a
d
m
i
n
/
u
s
e
r
s
/
$
{
u
s
e
r
.
i
d
}
/
s
t
a
t
u
s
`
,
 
{
 
i
s
A
c
t
i
v
e
:
 
!
u
s
e
r
.
i
s
A
c
t
i
v
e
 
}
)
;


 
 
 
 
 
 
s
e
t
U
s
e
r
(
{
 
.
.
.
u
s
e
r
,
 
i
s
A
c
t
i
v
e
:
 
!
u
s
e
r
.
i
s
A
c
t
i
v
e
 
}
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
`
U
s
e
r
 
$
{
u
s
e
r
.
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
d
e
a
c
t
i
v
a
t
e
d
"
 
:
 
"
a
c
t
i
v
a
t
e
d
"
}
`
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
r
r
o
r
 
=
 
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
;


 
 
 
 
 
 
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
e
r
r
o
r
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
|
|
 
"
F
a
i
l
e
d
 
t
o
 
u
p
d
a
t
e
 
u
s
e
r
"
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
d
e
l
e
t
e
U
s
e
r
 
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


 
 
 
 
i
f
 
(
!
u
s
e
r
)
 
r
e
t
u
r
n
;


 
 
 
 
i
f
 
(
!
c
o
n
f
i
r
m
(
`
A
r
e
 
y
o
u
 
s
u
r
e
 
y
o
u
 
w
a
n
t
 
t
o
 
d
e
l
e
t
e
 
$
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
}
?
 
T
h
i
s
 
c
a
n
n
o
t
 
b
e
 
u
n
d
o
n
e
.
`
)
)
 
r
e
t
u
r
n
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
d
e
l
e
t
e
(
`
/
a
d
m
i
n
/
u
s
e
r
s
/
$
{
u
s
e
r
.
i
d
}
`
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
U
s
e
r
 
d
e
l
e
t
e
d
"
)
;


 
 
 
 
 
 
n
a
v
i
g
a
t
e
(
"
/
a
d
m
i
n
/
u
s
e
r
s
"
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
r
r
o
r
 
=
 
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
;


 
 
 
 
 
 
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
e
r
r
o
r
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
|
|
 
"
F
a
i
l
e
d
 
t
o
 
d
e
l
e
t
e
 
u
s
e
r
"
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
 
{


 
 
 
 
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
 
h
-
6
4
 
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
L
o
a
d
i
n
g
 
u
s
e
r
.
.
.
<
/
d
i
v
>
;


 
 
}




 
 
i
f
 
(
!
u
s
e
r
)
 
{


 
 
 
 
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
4
0
0
"
>
U
s
e
r
 
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


 
 
}




 
 
c
o
n
s
t
 
p
r
o
j
e
c
t
s
 
=
 
(
A
r
r
a
y
.
i
s
A
r
r
a
y
(
u
s
e
r
.
p
r
o
j
e
c
t
s
)
 
?
 
u
s
e
r
.
p
r
o
j
e
c
t
s
 
:
 
[
]
)
 
a
s
 
P
r
o
j
e
c
t
I
t
e
m
[
]
;


 
 
c
o
n
s
t
 
a
c
h
i
e
v
e
m
e
n
t
s
 
=
 
(
A
r
r
a
y
.
i
s
A
r
r
a
y
(
u
s
e
r
.
a
c
h
i
e
v
e
m
e
n
t
s
)
 
?
 
u
s
e
r
.
a
c
h
i
e
v
e
m
e
n
t
s
 
:
 
[
]
)
 
a
s
 
A
c
h
i
e
v
e
m
e
n
t
I
t
e
m
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
>


 
 
 
 
 
 
<
S
E
O
 
t
i
t
l
e
=
"
U
s
e
r
 
D
e
t
a
i
l
"
 
n
o
I
n
d
e
x
 
/
>


 
 
 
 
 
 
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
 
n
a
v
i
g
a
t
e
(
"
/
a
d
m
i
n
/
u
s
e
r
s
"
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
 
m
b
-
6
 
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
 
t
o
 
U
s
e
r
s


 
 
 
 
 
 
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
 
2
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
6
"
>


 
 
 
 
 
 
 
 
{
/
*
 
H
e
a
d
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
"
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
s
t
a
r
t
 
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
s
t
a
r
t
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
1
6
 
h
-
1
6
 
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
w
-
1
6
 
h
-
1
6
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
1
 
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
w
h
i
t
e
"
>
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
}
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
b
i
o
 
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
4
0
0
 
m
t
-
1
 
m
a
x
-
w
-
l
g
"
>
{
u
s
e
r
.
b
i
o
}
<
/
p
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
t
-
2
 
f
l
e
x
-
w
r
a
p
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
R
o
l
e
B
a
d
g
e
(
u
s
e
r
.
r
o
l
e
)
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
r
o
l
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
u
s
e
r
.
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
5
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
4
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
9
0
0
/
5
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
4
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
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
A
c
t
i
v
e
"
 
:
 
"
I
n
a
c
t
i
v
e
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
u
s
e
r
.
i
s
V
e
r
i
f
i
e
d
 
&
&
 
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
5
0
 
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
3
 
h
-
3
"
 
/
>
 
V
e
r
i
f
i
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
u
s
e
r
.
i
s
V
e
r
i
f
i
e
d
 
&
&
 
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
 
h
-
3
"
 
/
>
 
U
n
v
e
r
i
f
i
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
i
s
P
r
o
f
i
l
e
P
u
b
l
i
c
 
&
&
 
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
 
b
g
-
c
y
a
n
-
9
0
0
/
5
0
 
t
e
x
t
-
c
y
a
n
-
4
0
0
"
>
P
u
b
l
i
c
 
P
r
o
f
i
l
e
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
a
d
m
i
n
P
r
o
f
i
l
e
 
&
&
 
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
 
b
g
-
i
n
d
i
g
o
-
9
0
0
/
5
0
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
a
d
m
i
n
P
r
o
f
i
l
e
.
t
i
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
o
g
g
l
e
S
t
a
t
u
s
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
p
x
-
4
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
s
e
r
.
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
9
0
0
/
3
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
4
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
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
9
0
0
/
3
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
4
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
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
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
D
e
a
c
t
i
v
a
t
e
"
 
:
 
"
A
c
t
i
v
a
t
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
e
l
e
t
e
U
s
e
r
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
4
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
 
h
o
v
e
r
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
5
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
e
l
e
t
e
 
U
s
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
6
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
a
c
t
 
&
 
P
r
o
f
i
l
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
 
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
l
g
 
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
C
o
n
t
a
c
t
 
&
 
P
r
o
f
i
l
e
<
/
h
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
f
o
R
o
w
 
i
c
o
n
=
{
M
a
i
l
}
 
l
a
b
e
l
=
"
E
m
a
i
l
"
 
v
a
l
u
e
=
{
u
s
e
r
.
e
m
a
i
l
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
c
o
n
t
a
c
t
N
o
 
&
&
 
<
I
n
f
o
R
o
w
 
i
c
o
n
=
{
P
h
o
n
e
}
 
l
a
b
e
l
=
"
P
h
o
n
e
"
 
v
a
l
u
e
=
{
u
s
e
r
.
c
o
n
t
a
c
t
N
o
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
c
o
m
p
a
n
y
 
&
&
 
<
I
n
f
o
R
o
w
 
i
c
o
n
=
{
B
u
i
l
d
i
n
g
2
}
 
l
a
b
e
l
=
"
C
o
m
p
a
n
y
"
 
v
a
l
u
e
=
{
`
$
{
u
s
e
r
.
c
o
m
p
a
n
y
}
$
{
u
s
e
r
.
d
e
s
i
g
n
a
t
i
o
n
 
?
 
`
 
-
 
$
{
u
s
e
r
.
d
e
s
i
g
n
a
t
i
o
n
}
`
 
:
 
"
"
}
`
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
l
o
c
a
t
i
o
n
 
&
&
 
<
I
n
f
o
R
o
w
 
i
c
o
n
=
{
M
a
p
P
i
n
}
 
l
a
b
e
l
=
"
L
o
c
a
t
i
o
n
"
 
v
a
l
u
e
=
{
u
s
e
r
.
l
o
c
a
t
i
o
n
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
c
o
l
l
e
g
e
 
&
&
 
<
I
n
f
o
R
o
w
 
i
c
o
n
=
{
G
r
a
d
u
a
t
i
o
n
C
a
p
}
 
l
a
b
e
l
=
"
C
o
l
l
e
g
e
"
 
v
a
l
u
e
=
{
u
s
e
r
.
c
o
l
l
e
g
e
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
g
r
a
d
u
a
t
i
o
n
Y
e
a
r
 
&
&
 
<
I
n
f
o
R
o
w
 
i
c
o
n
=
{
G
r
a
d
u
a
t
i
o
n
C
a
p
}
 
l
a
b
e
l
=
"
G
r
a
d
u
a
t
i
o
n
 
Y
e
a
r
"
 
v
a
l
u
e
=
{
S
t
r
i
n
g
(
u
s
e
r
.
g
r
a
d
u
a
t
i
o
n
Y
e
a
r
)
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
j
o
b
S
t
a
t
u
s
 
&
&
 
<
I
n
f
o
R
o
w
 
i
c
o
n
=
{
B
r
i
e
f
c
a
s
e
}
 
l
a
b
e
l
=
"
J
o
b
 
S
t
a
t
u
s
"
 
v
a
l
u
e
=
{
u
s
e
r
.
j
o
b
S
t
a
t
u
s
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
u
b
s
c
r
i
p
t
i
o
n
 
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
 
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
l
g
 
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
S
u
b
s
c
r
i
p
t
i
o
n
<
/
h
2
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
C
r
o
w
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
4
 
h
-
4
 
$
{
u
s
e
r
.
s
u
b
s
c
r
i
p
t
i
o
n
P
l
a
n
 
!
=
=
 
"
F
R
E
E
"
 
?
 
"
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
g
r
a
y
-
5
0
0
 
t
e
x
t
-
x
s
 
b
l
o
c
k
"
>
P
l
a
n
<
/
s
p
a
n
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
s
m
 
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
u
s
e
r
.
s
u
b
s
c
r
i
p
t
i
o
n
P
l
a
n
 
!
=
=
 
"
F
R
E
E
"
 
?
 
"
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
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
s
u
b
s
c
r
i
p
t
i
o
n
P
l
a
n
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
S
h
i
e
l
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
{
`
w
-
4
 
h
-
4
 
$
{
u
s
e
r
.
s
u
b
s
c
r
i
p
t
i
o
n
S
t
a
t
u
s
 
=
=
=
 
"
A
C
T
I
V
E
"
 
?
 
"
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
}
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
g
r
a
y
-
5
0
0
 
t
e
x
t
-
x
s
 
b
l
o
c
k
"
>
S
t
a
t
u
s
<
/
s
p
a
n
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
s
m
 
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
u
s
e
r
.
s
u
b
s
c
r
i
p
t
i
o
n
S
t
a
t
u
s
 
=
=
=
 
"
A
C
T
I
V
E
"
 
?
 
"
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
4
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
s
u
b
s
c
r
i
p
t
i
o
n
S
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
u
s
e
r
.
s
u
b
s
c
r
i
p
t
i
o
n
S
t
a
r
t
D
a
t
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
S
t
a
r
t
:
 
<
/
s
p
a
n
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
g
r
a
y
-
3
0
0
"
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
u
s
e
r
.
s
u
b
s
c
r
i
p
t
i
o
n
S
t
a
r
t
D
a
t
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
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
s
u
b
s
c
r
i
p
t
i
o
n
E
n
d
D
a
t
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
E
n
d
:
 
<
/
s
p
a
n
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
g
r
a
y
-
3
0
0
"
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
u
s
e
r
.
s
u
b
s
c
r
i
p
t
i
o
n
E
n
d
D
a
t
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
k
i
l
l
s
 
*
/
}


 
 
 
 
 
 
 
 
{
u
s
e
r
.
s
k
i
l
l
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
 
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
l
g
 
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
S
k
i
l
l
s
<
/
h
2
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
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
s
k
i
l
l
s
.
m
a
p
(
(
s
k
i
l
l
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
s
k
i
l
l
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
 
b
g
-
i
n
d
i
g
o
-
9
0
0
/
3
0
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
k
i
l
l
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
}




 
 
 
 
 
 
 
 
{
/
*
 
L
i
n
k
s
 
*
/
}


 
 
 
 
 
 
 
 
{
(
u
s
e
r
.
l
i
n
k
e
d
i
n
U
r
l
 
|
|
 
u
s
e
r
.
g
i
t
h
u
b
U
r
l
 
|
|
 
u
s
e
r
.
p
o
r
t
f
o
l
i
o
U
r
l
 
|
|
 
u
s
e
r
.
l
e
e
t
c
o
d
e
U
r
l
)
 
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
 
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
l
g
 
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
L
i
n
k
s
<
/
h
2
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
l
i
n
k
e
d
i
n
U
r
l
 
&
&
 
<
L
i
n
k
I
t
e
m
 
l
a
b
e
l
=
"
L
i
n
k
e
d
I
n
"
 
u
r
l
=
{
u
s
e
r
.
l
i
n
k
e
d
i
n
U
r
l
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
g
i
t
h
u
b
U
r
l
 
&
&
 
<
L
i
n
k
I
t
e
m
 
l
a
b
e
l
=
"
G
i
t
H
u
b
"
 
u
r
l
=
{
u
s
e
r
.
g
i
t
h
u
b
U
r
l
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
p
o
r
t
f
o
l
i
o
U
r
l
 
&
&
 
<
L
i
n
k
I
t
e
m
 
l
a
b
e
l
=
"
P
o
r
t
f
o
l
i
o
"
 
u
r
l
=
{
u
s
e
r
.
p
o
r
t
f
o
l
i
o
U
r
l
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
l
e
e
t
c
o
d
e
U
r
l
 
&
&
 
<
L
i
n
k
I
t
e
m
 
l
a
b
e
l
=
"
L
e
e
t
C
o
d
e
"
 
u
r
l
=
{
u
s
e
r
.
l
e
e
t
c
o
d
e
U
r
l
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
i
t
y
 
S
t
a
t
s
 
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
 
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
l
g
 
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
A
c
t
i
v
i
t
y
 
S
t
a
t
s
<
/
h
2
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
3
 
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
5
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
I
t
e
m
 
i
c
o
n
=
{
F
i
l
e
T
e
x
t
}
 
v
a
l
u
e
=
{
u
s
e
r
.
_
c
o
u
n
t
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
}
 
l
a
b
e
l
=
"
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
s
"
 
c
o
l
o
r
=
"
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
I
t
e
m
 
i
c
o
n
=
{
B
r
i
e
f
c
a
s
e
}
 
v
a
l
u
e
=
{
u
s
e
r
.
_
c
o
u
n
t
.
p
o
s
t
e
d
J
o
b
s
}
 
l
a
b
e
l
=
"
J
o
b
s
 
P
o
s
t
e
d
"
 
c
o
l
o
r
=
"
t
e
x
t
-
p
u
r
p
l
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
I
t
e
m
 
i
c
o
n
=
{
S
c
a
n
S
e
a
r
c
h
}
 
v
a
l
u
e
=
{
u
s
e
r
.
_
c
o
u
n
t
.
a
t
s
S
c
o
r
e
s
}
 
l
a
b
e
l
=
"
A
T
S
 
S
c
o
r
e
s
"
 
c
o
l
o
r
=
"
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
I
t
e
m
 
i
c
o
n
=
{
S
t
a
r
}
 
v
a
l
u
e
=
{
u
s
e
r
.
_
c
o
u
n
t
.
c
o
m
p
a
n
y
R
e
v
i
e
w
s
}
 
l
a
b
e
l
=
"
R
e
v
i
e
w
s
"
 
c
o
l
o
r
=
"
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
I
t
e
m
 
i
c
o
n
=
{
M
e
s
s
a
g
e
C
i
r
c
l
e
}
 
v
a
l
u
e
=
{
u
s
e
r
.
_
c
o
u
n
t
.
c
o
n
t
r
i
b
u
t
i
o
n
s
}
 
l
a
b
e
l
=
"
C
o
n
t
r
i
b
u
t
i
o
n
s
"
 
c
o
l
o
r
=
"
t
e
x
t
-
c
y
a
n
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
I
t
e
m
 
i
c
o
n
=
{
A
w
a
r
d
}
 
v
a
l
u
e
=
{
u
s
e
r
.
_
c
o
u
n
t
.
s
t
u
d
e
n
t
B
a
d
g
e
s
}
 
l
a
b
e
l
=
"
B
a
d
g
e
s
"
 
c
o
l
o
r
=
"
t
e
x
t
-
o
r
a
n
g
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
I
t
e
m
 
i
c
o
n
=
{
S
h
i
e
l
d
}
 
v
a
l
u
e
=
{
u
s
e
r
.
_
c
o
u
n
t
.
v
e
r
i
f
i
e
d
S
k
i
l
l
s
}
 
l
a
b
e
l
=
"
V
e
r
i
f
i
e
d
 
S
k
i
l
l
s
"
 
c
o
l
o
r
=
"
t
e
x
t
-
e
m
e
r
a
l
d
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
I
t
e
m
 
i
c
o
n
=
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
}
 
v
a
l
u
e
=
{
u
s
e
r
.
_
c
o
u
n
t
.
s
k
i
l
l
T
e
s
t
A
t
t
e
m
p
t
s
}
 
l
a
b
e
l
=
"
T
e
s
t
 
A
t
t
e
m
p
t
s
"
 
c
o
l
o
r
=
"
t
e
x
t
-
p
i
n
k
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
I
t
e
m
 
i
c
o
n
=
{
G
l
o
b
e
}
 
v
a
l
u
e
=
{
u
s
e
r
.
_
c
o
u
n
t
.
u
s
a
g
e
L
o
g
s
}
 
l
a
b
e
l
=
"
U
s
a
g
e
 
L
o
g
s
"
 
c
o
l
o
r
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
4
0
0
"
 
/
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
 
P
r
o
j
e
c
t
s
 
*
/
}


 
 
 
 
 
 
 
 
{
p
r
o
j
e
c
t
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
 
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
l
g
 
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
P
r
o
j
e
c
t
s
 
(
{
p
r
o
j
e
c
t
s
.
l
e
n
g
t
h
}
)
<
/
h
2
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
p
r
o
j
e
c
t
s
.
m
a
p
(
(
p
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
p
.
i
d
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
/
5
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
 
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
s
m
 
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
w
h
i
t
e
"
>
{
p
.
t
i
t
l
e
}
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
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
x
s
 
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
 
m
t
-
1
"
>
{
p
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
p
.
t
e
c
h
S
t
a
c
k
?
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
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
t
e
c
h
S
t
a
c
k
.
m
a
p
(
(
t
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
t
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
2
 
p
y
-
0
.
5
 
b
g
-
g
r
a
y
-
7
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
3
0
0
 
r
o
u
n
d
e
d
 
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
"
>
{
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
r
e
p
o
U
r
l
 
&
&
 
<
a
 
h
r
e
f
=
{
p
.
r
e
p
o
U
r
l
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
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
t
e
x
t
-
x
s
 
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
 
h
o
v
e
r
:
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
R
e
p
o
<
/
a
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
l
i
v
e
U
r
l
 
&
&
 
<
a
 
h
r
e
f
=
{
p
.
l
i
v
e
U
r
l
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
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
t
e
x
t
-
x
s
 
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
 
h
o
v
e
r
:
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
L
i
v
e
<
/
a
>
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
}




 
 
 
 
 
 
 
 
{
/
*
 
A
c
h
i
e
v
e
m
e
n
t
s
 
*
/
}


 
 
 
 
 
 
 
 
{
a
c
h
i
e
v
e
m
e
n
t
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
 
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
l
g
 
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
A
c
h
i
e
v
e
m
e
n
t
s
 
(
{
a
c
h
i
e
v
e
m
e
n
t
s
.
l
e
n
g
t
h
}
)
<
/
h
2
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
a
c
h
i
e
v
e
m
e
n
t
s
.
m
a
p
(
(
a
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
a
.
i
d
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
/
5
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
 
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
s
m
 
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
w
h
i
t
e
"
>
{
a
.
t
i
t
l
e
}
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
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
x
s
 
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
 
m
t
-
1
"
>
{
a
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
a
.
d
a
t
e
 
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
x
s
 
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
t
-
1
"
>
{
a
.
d
a
t
e
}
<
/
p
>
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
m
e
s
 
&
 
M
e
d
i
a
 
*
/
}


 
 
 
 
 
 
 
 
{
(
(
u
s
e
r
.
r
e
s
u
m
e
s
 
&
&
 
u
s
e
r
.
r
e
s
u
m
e
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
)
 
|
|
 
u
s
e
r
.
c
o
v
e
r
I
m
a
g
e
)
 
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
 
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
l
g
 
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
F
i
l
e
s
 
&
 
M
e
d
i
a
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
.
c
o
v
e
r
I
m
a
g
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
m
b
-
4
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
g
r
a
y
-
5
0
0
 
t
e
x
t
-
x
s
 
b
l
o
c
k
 
m
b
-
2
"
>
C
o
v
e
r
 
I
m
a
g
e
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
c
o
v
e
r
I
m
a
g
e
}
 
a
l
t
=
"
C
o
v
e
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
f
u
l
l
 
m
a
x
-
w
-
m
d
 
h
-
3
2
 
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
u
s
e
r
.
r
e
s
u
m
e
s
 
&
&
 
u
s
e
r
.
r
e
s
u
m
e
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
g
r
a
y
-
5
0
0
 
t
e
x
t
-
x
s
 
b
l
o
c
k
 
m
b
-
2
"
>
R
e
s
u
m
e
s
 
(
{
u
s
e
r
.
r
e
s
u
m
e
s
.
l
e
n
g
t
h
}
)
<
/
s
p
a
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
u
s
e
r
.
r
e
s
u
m
e
s
.
m
a
p
(
(
u
r
l
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
k
e
y
=
{
i
}
 
h
r
e
f
=
{
u
r
l
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
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
s
m
 
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
 
h
o
v
e
r
:
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
T
e
x
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
 
R
e
s
u
m
e
 
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
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




 
 
 
 
 
 
 
 
{
/
*
 
A
c
c
o
u
n
t
 
D
e
t
a
i
l
s
 
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
 
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
l
g
 
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
A
c
c
o
u
n
t
 
D
e
t
a
i
l
s
<
/
h
2
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
2
 
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
4
 
g
a
p
-
4
 
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
U
s
e
r
 
I
D
<
/
s
p
a
n
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
3
0
0
"
>
{
u
s
e
r
.
i
d
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


 
 
 
 
 
 
 
 
 
 
 
 
<
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
J
o
i
n
e
d
<
/
s
p
a
n
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
3
0
0
"
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
u
s
e
r
.
c
r
e
a
t
e
d
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
p
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
L
a
s
t
 
U
p
d
a
t
e
d
<
/
s
p
a
n
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
3
0
0
"
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
u
s
e
r
.
u
p
d
a
t
e
d
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
p
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
P
r
o
f
i
l
e
 
V
i
s
i
b
i
l
i
t
y
<
/
s
p
a
n
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
3
0
0
"
>
{
u
s
e
r
.
i
s
P
r
o
f
i
l
e
P
u
b
l
i
c
 
?
 
"
P
u
b
l
i
c
"
 
:
 
"
P
r
i
v
a
t
e
"
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
 
I
n
f
o
R
o
w
(
{
 
i
c
o
n
:
 
I
c
o
n
,
 
l
a
b
e
l
,
 
v
a
l
u
e
 
}
:
 
{
 
i
c
o
n
:
 
t
y
p
e
o
f
 
M
a
i
l
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
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
 
}
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
4
 
h
-
4
 
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
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
<
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
g
r
a
y
-
5
0
0
 
t
e
x
t
-
x
s
 
b
l
o
c
k
"
>
{
l
a
b
e
l
}
<
/
s
p
a
n
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
g
r
a
y
-
3
0
0
"
>
{
v
a
l
u
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




f
u
n
c
t
i
o
n
 
L
i
n
k
I
t
e
m
(
{
 
l
a
b
e
l
,
 
u
r
l
 
}
:
 
{
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
u
r
l
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


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
a
 
h
r
e
f
=
{
u
r
l
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
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
s
m
 
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
3
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
"
>


 
 
 
 
 
 
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


 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
<
/
a
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
 
S
t
a
t
I
t
e
m
(
{
 
i
c
o
n
:
 
I
c
o
n
,
 
v
a
l
u
e
,
 
l
a
b
e
l
,
 
c
o
l
o
r
 
}
:
 
{
 
i
c
o
n
:
 
t
y
p
e
o
f
 
F
i
l
e
T
e
x
t
;
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
c
o
l
o
r
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
<
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
{
`
w
-
5
 
h
-
5
 
$
{
c
o
l
o
r
}
`
}
 
/
>


 
 
 
 
 
 
<
/
d
i
v
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
w
h
i
t
e
"
>
{
v
a
l
u
e
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
x
s
 
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
l
a
b
e
l
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
 
g
e
t
R
o
l
e
B
a
d
g
e
(
r
o
l
e
:
 
s
t
r
i
n
g
)
 
{


 
 
s
w
i
t
c
h
 
(
r
o
l
e
)
 
{


 
 
 
 
c
a
s
e
 
"
S
T
U
D
E
N
T
"
:
 
r
e
t
u
r
n
 
"
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
5
0
 
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
"
;


 
 
 
 
c
a
s
e
 
"
R
E
C
R
U
I
T
E
R
"
:
 
r
e
t
u
r
n
 
"
b
g
-
p
u
r
p
l
e
-
9
0
0
/
5
0
 
t
e
x
t
-
p
u
r
p
l
e
-
4
0
0
"
;


 
 
 
 
c
a
s
e
 
"
A
D
M
I
N
"
:
 
r
e
t
u
r
n
 
"
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
5
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
4
0
0
"
;


 
 
 
 
d
e
f
a
u
l
t
:
 
r
e
t
u
r
n
 
"
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
;


 
 
}


}


