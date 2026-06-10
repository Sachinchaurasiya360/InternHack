
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
Q
u
e
r
y
,
 
u
s
e
M
u
t
a
t
i
o
n
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
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
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


 
 
H
i
s
t
o
r
y
,


 
 
T
r
a
s
h
2
,


 
 
C
h
e
v
r
o
n
D
o
w
n
,


 
 
C
h
e
v
r
o
n
U
p
,


 
 
R
o
t
a
t
e
C
c
w
,


 
 
L
o
a
d
e
r
2
,


 
 
C
l
o
c
k
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
n
t
e
r
f
a
c
e
 
H
i
s
t
o
r
y
I
t
e
m
 
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


 
 
j
o
b
T
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
 
|
 
n
u
l
l
;


 
 
c
o
m
p
a
n
y
N
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
 
|
 
n
u
l
l
;


 
 
t
o
n
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
x
c
e
r
p
t
:
 
 
 
 
 
s
t
r
i
n
g
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
 
P
r
o
p
s
 
{


 
 
o
n
L
o
a
d
:
 
(
l
e
t
t
e
r
:
 
{


 
 
 
 
j
o
b
T
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


 
 
 
 
c
o
m
p
a
n
y
N
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


 
 
 
 
j
o
b
D
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


 
 
 
 
t
o
n
e
:
 
 
 
 
 
 
 
 
 
 
 
s
t
r
i
n
g
;


 
 
 
 
u
s
e
P
r
o
f
i
l
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


 
 
 
 
k
e
y
S
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
;


 
 
}
)
 
=
>
 
v
o
i
d
;


}




c
o
n
s
t
 
c
a
r
d
C
l
s
 
=


 
 
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
;


c
o
n
s
t
 
s
e
c
t
i
o
n
K
i
c
k
e
r
C
l
s
 
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
 
t
i
m
e
A
g
o
(
d
a
t
e
S
t
r
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
 
d
i
f
f
 
=
 
D
a
t
e
.
n
o
w
(
)
 
-
 
n
e
w
 
D
a
t
e
(
d
a
t
e
S
t
r
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
;


 
 
c
o
n
s
t
 
m
i
n
s
 
 
=
 
M
a
t
h
.
f
l
o
o
r
(
d
i
f
f
 
/
 
6
0
0
0
0
)
;


 
 
c
o
n
s
t
 
h
o
u
r
s
 
=
 
M
a
t
h
.
f
l
o
o
r
(
d
i
f
f
 
/
 
3
6
0
0
0
0
0
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
 
 
=
 
M
a
t
h
.
f
l
o
o
r
(
d
i
f
f
 
/
 
8
6
4
0
0
0
0
0
)
;


 
 
i
f
 
(
m
i
n
s
 
 
<
 
1
)
 
 
r
e
t
u
r
n
 
"
j
u
s
t
 
n
o
w
"
;


 
 
i
f
 
(
m
i
n
s
 
 
<
 
6
0
)
 
r
e
t
u
r
n
 
`
$
{
S
t
r
i
n
g
(
m
i
n
s
)
}
m
 
a
g
o
`
;


 
 
i
f
 
(
h
o
u
r
s
 
<
 
2
4
)
 
r
e
t
u
r
n
 
`
$
{
S
t
r
i
n
g
(
h
o
u
r
s
)
}
h
 
a
g
o
`
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
S
t
r
i
n
g
(
d
a
y
s
)
}
d
 
a
g
o
`
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
 
C
o
v
e
r
L
e
t
t
e
r
H
i
s
t
o
r
y
P
a
n
e
l
(
{
 
o
n
L
o
a
d
 
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
o
p
e
n
,
 
 
 
 
 
 
s
e
t
O
p
e
n
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
l
o
a
d
i
n
g
I
d
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
<
{
 
h
i
s
t
o
r
y
:
 
H
i
s
t
o
r
y
I
t
e
m
[
]
 
}
>
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
c
o
v
e
r
L
e
t
t
e
r
.
h
i
s
t
o
r
y
(
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
"
/
a
t
s
/
c
o
v
e
r
-
l
e
t
t
e
r
/
h
i
s
t
o
r
y
"
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
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
 
 
o
p
e
n
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
3
0
_
0
0
0
,


 
 
}
)
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
M
u
t
a
t
i
o
n
 
=
 
u
s
e
M
u
t
a
t
i
o
n
(
{


 
 
 
 
m
u
t
a
t
i
o
n
F
n
:
 
(
i
d
:
 
n
u
m
b
e
r
)
 
=
>
 
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
t
s
/
c
o
v
e
r
-
l
e
t
t
e
r
/
h
i
s
t
o
r
y
/
$
{
S
t
r
i
n
g
(
i
d
)
}
`
)
,


 
 
 
 
o
n
S
u
c
c
e
s
s
:
 
(
)
 
=
>
 
{


 
 
 
 
 
 
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
c
o
v
e
r
L
e
t
t
e
r
.
h
i
s
t
o
r
y
(
)
 
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
"
D
e
l
e
t
e
d
"
)
;


 
 
 
 
}
,


 
 
 
 
o
n
E
r
r
o
r
:
 
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
"
)
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
L
o
a
d
 
=
 
a
s
y
n
c
 
(
i
d
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
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
I
d
(
i
d
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
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
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
<
{


 
 
 
 
 
 
 
 
l
e
t
t
e
r
:
 
{


 
 
 
 
 
 
 
 
 
 
j
o
b
T
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
 
|
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
c
o
m
p
a
n
y
N
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
 
|
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
j
o
b
D
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


 
 
 
 
 
 
 
 
 
 
t
o
n
e
:
 
 
 
 
 
 
 
 
 
 
 
s
t
r
i
n
g
;


 
 
 
 
 
 
 
 
 
 
u
s
e
P
r
o
f
i
l
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


 
 
 
 
 
 
 
 
 
 
k
e
y
S
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
 
|
 
n
u
l
l
;


 
 
 
 
 
 
 
 
}
;


 
 
 
 
 
 
}
>
(
`
/
a
t
s
/
c
o
v
e
r
-
l
e
t
t
e
r
/
h
i
s
t
o
r
y
/
$
{
S
t
r
i
n
g
(
i
d
)
}
`
)
;




 
 
 
 
 
 
o
n
L
o
a
d
(
{


 
 
 
 
 
 
 
 
j
o
b
T
i
t
l
e
:
 
 
 
 
 
 
 
d
a
t
a
.
l
e
t
t
e
r
.
j
o
b
T
i
t
l
e
 
 
 
 
 
 
 
?
?
 
"
"
,


 
 
 
 
 
 
 
 
c
o
m
p
a
n
y
N
a
m
e
:
 
 
 
 
d
a
t
a
.
l
e
t
t
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
N
a
m
e
 
 
 
 
?
?
 
"
"
,


 
 
 
 
 
 
 
 
j
o
b
D
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
 
d
a
t
a
.
l
e
t
t
e
r
.
j
o
b
D
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
,


 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
 
 
 
 
 
 
 
d
a
t
a
.
l
e
t
t
e
r
.
c
o
n
t
e
n
t
,


 
 
 
 
 
 
 
 
t
o
n
e
:
 
 
 
 
 
 
 
 
 
 
 
d
a
t
a
.
l
e
t
t
e
r
.
t
o
n
e
,


 
 
 
 
 
 
 
 
u
s
e
P
r
o
f
i
l
e
:
 
 
 
 
 
d
a
t
a
.
l
e
t
t
e
r
.
u
s
e
P
r
o
f
i
l
e
,


 
 
 
 
 
 
 
 
k
e
y
S
k
i
l
l
s
:
 
 
 
 
 
 
d
a
t
a
.
l
e
t
t
e
r
.
k
e
y
S
k
i
l
l
s
 
 
 
 
 
 
?
?
 
"
"
,


 
 
 
 
 
 
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
"
L
o
a
d
e
d
 
—
 
e
d
i
t
 
a
n
d
 
r
e
g
e
n
e
r
a
t
e
 
a
n
y
t
i
m
e
"
)
;


 
 
 
 
}
 
c
a
t
c
h
 
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
F
a
i
l
e
d
 
t
o
 
l
o
a
d
 
l
e
t
t
e
r
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
L
o
a
d
i
n
g
I
d
(
n
u
l
l
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
 
h
i
s
t
o
r
y
 
=
 
d
a
t
a
?
.
h
i
s
t
o
r
y
 
?
?
 
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
{
c
a
r
d
C
l
s
}
>


 
 
 
 
 
 
{
/
*
 
─
─
 
H
e
a
d
e
r
 
t
o
g
g
l
e
 
─
─
 
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
O
p
e
n
(
(
v
)
 
=
>
 
!
v
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
w
-
f
u
l
l
 
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
 
g
a
p
-
3
 
p
x
-
5
 
p
y
-
3
.
5
 
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
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
t
e
x
t
-
l
e
f
t
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
 
m
i
n
-
w
-
0
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
s
e
c
t
i
o
n
K
i
c
k
e
r
C
l
s
}
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
h
i
s
t
o
r
y


 
 
 
 
 
 
 
 
 
 
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
s
m
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
P
a
s
t
 
c
o
v
e
r
 
l
e
t
t
e
r
s


 
 
 
 
 
 
 
 
 
 
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
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
{
h
i
s
t
o
r
y
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
m
d
 
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
 
f
o
n
t
-
b
o
l
d
 
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
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
i
s
t
o
r
y
.
l
e
n
g
t
h
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


 
 
 
 
 
 
 
 
 
 
{
o
p
e
n


 
 
 
 
 
 
 
 
 
 
 
 
?
 
<
C
h
e
v
r
o
n
U
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
:
 
<
C
h
e
v
r
o
n
D
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
b
u
t
t
o
n
>




 
 
 
 
 
 
{
/
*
 
─
─
 
C
o
n
t
e
n
t
 
─
─
 
*
/
}


 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
{
o
p
e
n
 
&
&
 
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
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
y
:
 
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
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
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
2
 
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
 
?
 
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
y
-
1
0
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
h
i
s
t
o
r
y
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
 
?
 
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
y
-
1
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
 
p
x
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
H
i
s
t
o
r
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
w
-
8
 
h
-
8
 
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
7
0
0
 
m
b
-
3
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
s
m
 
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
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
l
e
t
t
e
r
s
 
y
e
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
e
n
e
r
a
t
e
d
 
l
e
t
t
e
r
s
 
a
u
t
o
-
s
a
v
e
 
h
e
r
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v
i
d
e
-
y
 
d
i
v
i
d
e
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
d
i
v
i
d
e
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
h
i
s
t
o
r
y
.
m
a
p
(
(
i
t
e
m
)
 
=
>
 
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
i
t
e
m
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
 
4
 
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
g
r
o
u
p
 
p
x
-
5
 
p
y
-
4
 
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
9
5
0
/
4
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
 
m
i
n
-
w
-
0
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
c
o
m
p
a
n
y
N
a
m
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
i
l
d
i
n
g
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
2
.
5
 
h
-
2
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
c
o
m
p
a
n
y
N
a
m
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
j
o
b
T
i
t
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
r
i
e
f
c
a
s
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
2
.
5
 
h
-
2
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
j
o
b
T
i
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
i
t
e
m
.
c
o
m
p
a
n
y
N
a
m
e
 
&
&
 
!
i
t
e
m
.
j
o
b
T
i
t
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
n
t
i
t
l
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
2
 
m
t
-
1
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
2
.
5
 
h
-
2
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
i
m
e
A
g
o
(
i
t
e
m
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
h
-
1
 
w
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
 
b
g
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
b
g
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
t
e
m
.
t
o
n
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
 
s
h
r
i
n
k
-
0
 
o
p
a
c
i
t
y
-
0
 
g
r
o
u
p
-
h
o
v
e
r
:
o
p
a
c
i
t
y
-
1
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
o
p
a
c
i
t
y
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
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
L
o
a
d
(
i
t
e
m
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
l
o
a
d
i
n
g
I
d
 
=
=
=
 
i
t
e
m
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
L
o
a
d
 
t
h
i
s
 
l
e
t
t
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
 
p
x
-
2
 
p
y
-
1
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
b
o
l
d
 
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
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
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
w
h
i
t
e
/
1
5
 
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
1
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
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
I
d
 
=
=
=
 
i
t
e
m
.
i
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
3
 
h
-
3
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
<
R
o
t
a
t
e
C
c
w
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
o
a
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
e
l
e
t
e
M
u
t
a
t
i
o
n
.
m
u
t
a
t
e
(
i
t
e
m
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
d
e
l
e
t
e
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
D
e
l
e
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
 
w
-
7
 
h
-
7
 
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
t
o
n
e
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
r
e
d
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
5
0
/
2
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
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
a
s
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
 
l
i
n
e
-
c
l
a
m
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
e
x
c
e
r
p
t
}
…


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
}


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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
