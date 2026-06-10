
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
M
e
m
o
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
N
a
v
i
g
a
t
e
,
 
u
s
e
S
e
a
r
c
h
P
a
r
a
m
s
 
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
 
P
l
u
s
,
 
T
r
a
s
h
2
,
 
G
r
i
p
V
e
r
t
i
c
a
l
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
 
S
e
a
r
c
h
,
 
S
e
n
d
,
 
I
n
f
o
 
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
y
p
e
 
{


 
 
I
n
t
e
r
v
i
e
w
E
x
p
e
r
i
e
n
c
e
C
o
m
p
a
n
y
,


 
 
I
n
t
e
r
v
i
e
w
P
r
e
p
R
e
s
o
u
r
c
e
,


 
 
I
n
t
e
r
v
i
e
w
R
o
u
n
d
,


 
 
I
n
t
e
r
v
i
e
w
R
o
u
n
d
T
y
p
e
,


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
 
c
r
e
a
t
e
E
x
p
e
r
i
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
.
/
i
n
t
e
r
v
i
e
w
s
-
a
p
i
"
;




c
o
n
s
t
 
R
O
U
N
D
_
T
Y
P
E
S
:
 
{
 
v
a
l
u
e
:
 
I
n
t
e
r
v
i
e
w
R
o
u
n
d
T
y
p
e
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
 
}
[
]
 
=
 
[


 
 
{
 
v
a
l
u
e
:
 
"
T
E
C
H
N
I
C
A
L
"
,
 
l
a
b
e
l
:
 
"
T
e
c
h
n
i
c
a
l
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
C
O
D
I
N
G
"
,
 
l
a
b
e
l
:
 
"
C
o
d
i
n
g
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
D
S
A
"
,
 
l
a
b
e
l
:
 
"
D
S
A
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
S
Y
S
T
E
M
_
D
E
S
I
G
N
"
,
 
l
a
b
e
l
:
 
"
S
y
s
t
e
m
 
D
e
s
i
g
n
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
H
R
"
,
 
l
a
b
e
l
:
 
"
H
R
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
M
A
N
A
G
E
R
I
A
L
"
,
 
l
a
b
e
l
:
 
"
M
a
n
a
g
e
r
i
a
l
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
B
E
H
A
V
I
O
R
A
L
"
,
 
l
a
b
e
l
:
 
"
B
e
h
a
v
i
o
r
a
l
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
A
P
T
I
T
U
D
E
"
,
 
l
a
b
e
l
:
 
"
A
p
t
i
t
u
d
e
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
G
D
"
,
 
l
a
b
e
l
:
 
"
G
r
o
u
p
 
D
i
s
c
u
s
s
i
o
n
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
O
T
H
E
R
"
,
 
l
a
b
e
l
:
 
"
O
t
h
e
r
"
 
}
,


]
;




c
o
n
s
t
 
e
m
p
t
y
R
o
u
n
d
 
=
 
(
)
:
 
I
n
t
e
r
v
i
e
w
R
o
u
n
d
 
=
>
 
(
{


 
 
t
y
p
e
:
 
"
T
E
C
H
N
I
C
A
L
"
,


 
 
q
u
e
s
t
i
o
n
s
:
 
[
{
 
p
r
o
m
p
t
:
 
"
"
 
}
]
,


}
)
;






f
u
n
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
(
{
 
c
h
i
l
d
r
e
n
 
}
:
 
{
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
 
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
.
5
 
w
-
1
.
5
 
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


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
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
 
F
i
e
l
d
(
{


 
 
l
a
b
e
l
,


 
 
h
i
n
t
,


 
 
r
e
q
u
i
r
e
d
,


 
 
c
h
i
l
d
r
e
n
,


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


 
 
h
i
n
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


 
 
r
e
q
u
i
r
e
d
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


 
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


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
>


 
 
 
 
 
 
<
l
a
b
e
l
 
c
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
l
o
c
k
 
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
 
m
b
-
1
.
5
"
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
 
 
{
r
e
q
u
i
r
e
d
 
?
 
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
 
*
<
/
s
p
a
n
>
 
:
 
n
u
l
l
}


 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
 
 
{
h
i
n
t
 
?
 
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
 
m
t
-
1
"
>
{
h
i
n
t
}
<
/
p
>
 
:
 
n
u
l
l
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




c
o
n
s
t
 
i
n
p
u
t
C
l
a
s
s
 
=


 
 
"
w
-
f
u
l
l
 
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
 
p
l
a
c
e
h
o
l
d
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
4
0
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
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
"
;




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
h
a
r
e
I
n
t
e
r
v
i
e
w
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
s
e
a
r
c
h
P
a
r
a
m
s
]
 
=
 
u
s
e
S
e
a
r
c
h
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
 
p
r
e
f
i
l
l
S
l
u
g
 
=
 
s
e
a
r
c
h
P
a
r
a
m
s
.
g
e
t
(
"
c
o
m
p
a
n
y
"
)
;




 
 
/
/
 
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
 
=
 
f
r
e
e
-
t
e
x
t
 
t
y
p
e
d
 
b
y
 
u
s
e
r
;
 
s
e
l
e
c
t
e
d
C
o
m
p
a
n
y
 
=
 
o
p
t
i
o
n
a
l
 
m
a
t
c
h
 
f
r
o
m
 
s
e
a
r
c
h


 
 
c
o
n
s
t
 
[
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
,
 
s
e
t
C
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
"
"
)
;


 
 
c
o
n
s
t
 
[
c
o
m
p
a
n
y
R
e
s
u
l
t
s
,
 
s
e
t
C
o
m
p
a
n
y
R
e
s
u
l
t
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
I
n
t
e
r
v
i
e
w
E
x
p
e
r
i
e
n
c
e
C
o
m
p
a
n
y
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
C
o
m
p
a
n
y
,
 
s
e
t
S
e
l
e
c
t
e
d
C
o
m
p
a
n
y
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
I
n
t
e
r
v
i
e
w
E
x
p
e
r
i
e
n
c
e
C
o
m
p
a
n
y
 
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
c
o
m
p
a
n
y
O
p
e
n
,
 
s
e
t
C
o
m
p
a
n
y
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
r
o
l
e
,
 
s
e
t
R
o
l
e
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
"
"
)
;


 
 
c
o
n
s
t
 
[
e
x
p
e
r
i
e
n
c
e
Y
e
a
r
s
,
 
s
e
t
E
x
p
e
r
i
e
n
c
e
Y
e
a
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
n
u
m
b
e
r
 
|
 
"
"
>
(
0
)
;


 
 
c
o
n
s
t
 
[
t
i
p
s
,
 
s
e
t
T
i
p
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
(
"
"
)
;


 
 
c
o
n
s
t
 
[
i
s
A
n
o
n
y
m
o
u
s
,
 
s
e
t
I
s
A
n
o
n
y
m
o
u
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
(
t
r
u
e
)
;




 
 
c
o
n
s
t
 
[
r
o
u
n
d
s
,
 
s
e
t
R
o
u
n
d
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
I
n
t
e
r
v
i
e
w
R
o
u
n
d
[
]
>
(
[
e
m
p
t
y
R
o
u
n
d
(
)
]
)
;


 
 
c
o
n
s
t
 
[
p
r
e
p
R
e
s
o
u
r
c
e
s
,
 
s
e
t
P
r
e
p
R
e
s
o
u
r
c
e
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
I
n
t
e
r
v
i
e
w
P
r
e
p
R
e
s
o
u
r
c
e
[
]
>
(
[
]
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




 
 
/
/
 
C
o
m
p
a
n
y
 
s
e
a
r
c
h
 
w
i
t
h
 
d
e
b
o
u
n
c
e
 
(
o
p
t
i
o
n
a
l
 
—
 
f
o
r
 
p
r
e
-
l
i
n
k
i
n
g
)


 
 
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


 
 
 
 
i
f
 
(
!
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
.
t
r
i
m
(
)
 
|
|
 
s
e
l
e
c
t
e
d
C
o
m
p
a
n
y
?
.
n
a
m
e
 
=
=
=
 
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
)
 
{


 
 
 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
 
 
s
e
t
C
o
m
p
a
n
y
R
e
s
u
l
t
s
(
[
]
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
t
i
m
e
r
 
=
 
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


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
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
 
c
o
m
p
a
n
i
e
s
:
 
I
n
t
e
r
v
i
e
w
E
x
p
e
r
i
e
n
c
e
C
o
m
p
a
n
y
[
]
 
}
>
(
"
/
c
o
m
p
a
n
i
e
s
"
,
 
{


 
 
 
 
 
 
 
 
 
 
p
a
r
a
m
s
:
 
{
 
s
e
a
r
c
h
:
 
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
,
 
l
i
m
i
t
:
 
8
 
}
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
s
e
t
C
o
m
p
a
n
y
R
e
s
u
l
t
s
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
c
o
m
p
a
n
i
e
s
 
?
?
 
[
]
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
C
o
m
p
a
n
y
R
e
s
u
l
t
s
(
[
]
)
;


 
 
 
 
 
 
}


 
 
 
 
}
,
 
2
5
0
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
t
i
m
e
r
)
;


 
 
}
,
 
[
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
,
 
s
e
l
e
c
t
e
d
C
o
m
p
a
n
y
]
)
;




 
 
/
/
 
P
r
e
f
i
l
l
 
c
o
m
p
a
n
y
 
f
r
o
m
 
?
c
o
m
p
a
n
y
=
s
l
u
g


 
 
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


 
 
 
 
i
f
 
(
!
p
r
e
f
i
l
l
S
l
u
g
)
 
r
e
t
u
r
n
;


 
 
 
 
(
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


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
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
 
c
o
m
p
a
n
y
:
 
I
n
t
e
r
v
i
e
w
E
x
p
e
r
i
e
n
c
e
C
o
m
p
a
n
y
 
}
>
(


 
 
 
 
 
 
 
 
 
 
`
/
c
o
m
p
a
n
i
e
s
/
$
{
p
r
e
f
i
l
l
S
l
u
g
}
`
,


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
i
f
 
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
c
o
m
p
a
n
y
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
C
o
m
p
a
n
y
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
c
o
m
p
a
n
y
)
;


 
 
 
 
 
 
 
 
 
 
s
e
t
C
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
c
o
m
p
a
n
y
.
n
a
m
e
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
 
 
/
/
 
s
i
l
e
n
t
l
y
 
i
g
n
o
r
e
 
p
r
e
f
i
l
l
 
f
a
i
l
u
r
e
s


 
 
 
 
 
 
}


 
 
 
 
}
)
(
)
;


 
 
}
,
 
[
p
r
e
f
i
l
l
S
l
u
g
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
t
a
l
R
o
u
n
d
s
 
=
 
r
o
u
n
d
s
.
l
e
n
g
t
h
;




 
 
c
o
n
s
t
 
a
d
d
R
o
u
n
d
 
=
 
(
)
 
=
>
 
s
e
t
R
o
u
n
d
s
(
(
p
r
e
v
)
 
=
>
 
[
.
.
.
p
r
e
v
,
 
e
m
p
t
y
R
o
u
n
d
(
)
]
)
;


 
 
c
o
n
s
t
 
r
e
m
o
v
e
R
o
u
n
d
 
=
 
(
i
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


 
 
 
 
s
e
t
R
o
u
n
d
s
(
(
p
r
e
v
)
 
=
>
 
(
p
r
e
v
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
 
p
r
e
v
.
f
i
l
t
e
r
(
(
_
,
 
i
d
x
)
 
=
>
 
i
d
x
 
!
=
=
 
i
)
 
:
 
p
r
e
v
)
)
;


 
 
c
o
n
s
t
 
u
p
d
a
t
e
R
o
u
n
d
 
=
 
<
K
 
e
x
t
e
n
d
s
 
k
e
y
o
f
 
I
n
t
e
r
v
i
e
w
R
o
u
n
d
>
(


 
 
 
 
i
:
 
n
u
m
b
e
r
,


 
 
 
 
k
e
y
:
 
K
,


 
 
 
 
v
a
l
u
e
:
 
I
n
t
e
r
v
i
e
w
R
o
u
n
d
[
K
]
,


 
 
)
 
=
>
 
{


 
 
 
 
s
e
t
R
o
u
n
d
s
(
(
p
r
e
v
)
 
=
>
 
p
r
e
v
.
m
a
p
(
(
r
,
 
i
d
x
)
 
=
>
 
(
i
d
x
 
=
=
=
 
i
 
?
 
{
 
.
.
.
r
,
 
[
k
e
y
]
:
 
v
a
l
u
e
 
}
 
:
 
r
)
)
)
;


 
 
}
;


 
 
c
o
n
s
t
 
a
d
d
Q
u
e
s
t
i
o
n
 
=
 
(
r
o
u
n
d
I
d
x
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


 
 
 
 
s
e
t
R
o
u
n
d
s
(
(
p
r
e
v
)
 
=
>


 
 
 
 
 
 
p
r
e
v
.
m
a
p
(
(
r
,
 
i
)
 
=
>


 
 
 
 
 
 
 
 
i
 
=
=
=
 
r
o
u
n
d
I
d
x
 
?
 
{
 
.
.
.
r
,
 
q
u
e
s
t
i
o
n
s
:
 
[
.
.
.
r
.
q
u
e
s
t
i
o
n
s
,
 
{
 
p
r
o
m
p
t
:
 
"
"
 
}
]
 
}
 
:
 
r
,


 
 
 
 
 
 
)
,


 
 
 
 
)
;


 
 
c
o
n
s
t
 
u
p
d
a
t
e
Q
u
e
s
t
i
o
n
 
=
 
(


 
 
 
 
r
o
u
n
d
I
d
x
:
 
n
u
m
b
e
r
,


 
 
 
 
q
I
d
x
:
 
n
u
m
b
e
r
,


 
 
 
 
k
e
y
:
 
"
p
r
o
m
p
t
"
 
|
 
"
t
o
p
i
c
"
 
|
 
"
d
i
f
f
i
c
u
l
t
y
"
,


 
 
 
 
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
,


 
 
)
 
=
>


 
 
 
 
s
e
t
R
o
u
n
d
s
(
(
p
r
e
v
)
 
=
>


 
 
 
 
 
 
p
r
e
v
.
m
a
p
(
(
r
,
 
i
)
 
=
>


 
 
 
 
 
 
 
 
i
 
=
=
=
 
r
o
u
n
d
I
d
x


 
 
 
 
 
 
 
 
 
 
?
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
.
.
.
r
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
q
u
e
s
t
i
o
n
s
:
 
r
.
q
u
e
s
t
i
o
n
s
.
m
a
p
(
(
q
,
 
j
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
j
 
=
=
=
 
q
I
d
x
 
?
 
{
 
.
.
.
q
,
 
[
k
e
y
]
:
 
v
a
l
u
e
 
|
|
 
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
 
:
 
q
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
:
 
r
,


 
 
 
 
 
 
)
,


 
 
 
 
)
;


 
 
c
o
n
s
t
 
r
e
m
o
v
e
Q
u
e
s
t
i
o
n
 
=
 
(
r
o
u
n
d
I
d
x
:
 
n
u
m
b
e
r
,
 
q
I
d
x
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


 
 
 
 
s
e
t
R
o
u
n
d
s
(
(
p
r
e
v
)
 
=
>


 
 
 
 
 
 
p
r
e
v
.
m
a
p
(
(
r
,
 
i
)
 
=
>


 
 
 
 
 
 
 
 
i
 
=
=
=
 
r
o
u
n
d
I
d
x


 
 
 
 
 
 
 
 
 
 
?
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
.
.
.
r
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
q
u
e
s
t
i
o
n
s
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
.
q
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
 
1
 
?
 
r
.
q
u
e
s
t
i
o
n
s
.
f
i
l
t
e
r
(
(
_
,
 
j
)
 
=
>
 
j
 
!
=
=
 
q
I
d
x
)
 
:
 
r
.
q
u
e
s
t
i
o
n
s
,


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
:
 
r
,


 
 
 
 
 
 
)
,


 
 
 
 
)
;




 
 
c
o
n
s
t
 
a
d
d
R
e
s
o
u
r
c
e
 
=
 
(
)
 
=
>


 
 
 
 
s
e
t
P
r
e
p
R
e
s
o
u
r
c
e
s
(
(
p
r
e
v
)
 
=
>
 
[
.
.
.
p
r
e
v
,
 
{
 
t
y
p
e
:
 
"
a
r
t
i
c
l
e
"
,
 
t
i
t
l
e
:
 
"
"
,
 
u
r
l
:
 
"
"
 
}
]
)
;


 
 
c
o
n
s
t
 
u
p
d
a
t
e
R
e
s
o
u
r
c
e
 
=
 
<
K
 
e
x
t
e
n
d
s
 
k
e
y
o
f
 
I
n
t
e
r
v
i
e
w
P
r
e
p
R
e
s
o
u
r
c
e
>
(


 
 
 
 
i
:
 
n
u
m
b
e
r
,


 
 
 
 
k
e
y
:
 
K
,


 
 
 
 
v
a
l
u
e
:
 
I
n
t
e
r
v
i
e
w
P
r
e
p
R
e
s
o
u
r
c
e
[
K
]
,


 
 
)
 
=
>


 
 
 
 
s
e
t
P
r
e
p
R
e
s
o
u
r
c
e
s
(
(
p
r
e
v
)
 
=
>
 
p
r
e
v
.
m
a
p
(
(
r
,
 
i
d
x
)
 
=
>
 
(
i
d
x
 
=
=
=
 
i
 
?
 
{
 
.
.
.
r
,
 
[
k
e
y
]
:
 
v
a
l
u
e
 
}
 
:
 
r
)
)
)
;


 
 
c
o
n
s
t
 
r
e
m
o
v
e
R
e
s
o
u
r
c
e
 
=
 
(
i
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


 
 
 
 
s
e
t
P
r
e
p
R
e
s
o
u
r
c
e
s
(
(
p
r
e
v
)
 
=
>
 
p
r
e
v
.
f
i
l
t
e
r
(
(
_
,
 
i
d
x
)
 
=
>
 
i
d
x
 
!
=
=
 
i
)
)
;




 
 
c
o
n
s
t
 
c
a
n
S
u
b
m
i
t
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
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
.
t
r
i
m
(
)
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
i
f
 
(
!
r
o
l
e
.
t
r
i
m
(
)
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
r
 
o
f
 
r
o
u
n
d
s
)
 
{


 
 
 
 
 
 
i
f
 
(
r
.
q
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
 
f
a
l
s
e
;


 
 
 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
q
 
o
f
 
r
.
q
u
e
s
t
i
o
n
s
)
 
i
f
 
(
!
q
.
p
r
o
m
p
t
.
t
r
i
m
(
)
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
t
r
u
e
;


 
 
}
,
 
[
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
,
 
r
o
l
e
,
 
r
o
u
n
d
s
]
)
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
t
 
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
c
a
n
S
u
b
m
i
t
)
 
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
i
l
l
 
i
n
 
t
h
e
 
c
o
m
p
a
n
y
 
n
a
m
e
,
 
r
o
l
e
,
 
a
n
d
 
a
t
 
l
e
a
s
t
 
o
n
e
 
r
o
u
n
d
 
w
i
t
h
 
a
 
q
u
e
s
t
i
o
n
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
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


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
a
y
l
o
a
d
 
=
 
{


 
 
 
 
 
 
 
 
.
.
.
(
s
e
l
e
c
t
e
d
C
o
m
p
a
n
y
 
?
 
{
 
c
o
m
p
a
n
y
I
d
:
 
s
e
l
e
c
t
e
d
C
o
m
p
a
n
y
.
i
d
 
}
 
:
 
{
 
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
.
t
r
i
m
(
)
 
}
)
,


 
 
 
 
 
 
 
 
r
o
l
e
:
 
r
o
l
e
.
t
r
i
m
(
)
,


 
 
 
 
 
 
 
 
e
x
p
e
r
i
e
n
c
e
Y
e
a
r
s
:
 
e
x
p
e
r
i
e
n
c
e
Y
e
a
r
s
 
=
=
=
 
"
"
 
?
 
u
n
d
e
f
i
n
e
d
 
:
 
N
u
m
b
e
r
(
e
x
p
e
r
i
e
n
c
e
Y
e
a
r
s
)
,


 
 
 
 
 
 
 
 
t
o
t
a
l
R
o
u
n
d
s
,


 
 
 
 
 
 
 
 
r
o
u
n
d
s
:
 
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
)
 
=
>
 
(
{


 
 
 
 
 
 
 
 
 
 
.
.
.
r
,


 
 
 
 
 
 
 
 
 
 
q
u
e
s
t
i
o
n
s
:
 
r
.
q
u
e
s
t
i
o
n
s
.
f
i
l
t
e
r
(
(
q
)
 
=
>
 
q
.
p
r
o
m
p
t
.
t
r
i
m
(
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
)
,


 
 
 
 
 
 
 
 
}
)
)
,


 
 
 
 
 
 
 
 
t
i
p
s
:
 
t
i
p
s
.
t
r
i
m
(
)
 
|
|
 
u
n
d
e
f
i
n
e
d
,


 
 
 
 
 
 
 
 
p
r
e
p
R
e
s
o
u
r
c
e
s
:
 
p
r
e
p
R
e
s
o
u
r
c
e
s
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
.
t
i
t
l
e
.
t
r
i
m
(
)
)
,


 
 
 
 
 
 
 
 
i
s
A
n
o
n
y
m
o
u
s
,


 
 
 
 
 
 
}
;


 
 
 
 
 
 
a
w
a
i
t
 
c
r
e
a
t
e
E
x
p
e
r
i
e
n
c
e
(
p
a
y
l
o
a
d
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
E
x
p
e
r
i
e
n
c
e
 
s
u
b
m
i
t
t
e
d
 
f
o
r
 
r
e
v
i
e
w
,
 
t
h
a
n
k
 
y
o
u
!
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
s
t
u
d
e
n
t
/
i
n
t
e
r
v
i
e
w
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
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
m
e
s
s
a
g
e
 
=


 
 
 
 
 
 
 
 
e
r
r
 
i
n
s
t
a
n
c
e
o
f
 
E
r
r
o
r
 
&
&
 
"
r
e
s
p
o
n
s
e
"
 
i
n
 
e
r
r


 
 
 
 
 
 
 
 
 
 
?
 
(
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
)
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
m
e
s
s
a
g
e
 
?
?
 
"
F
a
i
l
e
d
 
t
o
 
s
u
b
m
i
t
,
 
p
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
p
b
-
1
6
"
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
S
h
a
r
e
 
i
n
t
e
r
v
i
e
w
 
e
x
p
e
r
i
e
n
c
e
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
6
 
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
m
b
-
1
0
 
m
t
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
c
o
n
t
r
i
b
u
t
e
 
/
 
i
n
t
e
r
v
i
e
w
 
e
x
p
e
r
i
e
n
c
e
<
/
K
i
c
k
e
r
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
m
t
-
4
 
t
e
x
t
-
3
x
l
 
s
m
:
t
e
x
t
-
4
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
r
a
c
k
i
n
g
-
t
i
g
h
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
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
S
h
a
r
e
 
y
o
u
r
 
s
t
o
r
y
.


 
 
 
 
 
 
 
 
<
/
h
1
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
m
t
-
3
 
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
s
t
o
n
e
-
5
0
0
 
m
a
x
-
w
-
x
l
"
>


 
 
 
 
 
 
 
 
 
 
H
e
l
p
 
j
u
n
i
o
r
s
 
w
h
o
'
l
l
 
i
n
t
e
r
v
i
e
w
 
a
t
 
{
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
 
|
|
 
"
t
h
i
s
 
c
o
m
p
a
n
y
"
}
 
n
e
x
t
 
y
e
a
r
.
 
Y
o
u
r
 
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
 
g
o
e
s
 
t
o
 
m
o
d
e
r
a
t
i
o
n
 
b
e
f
o
r
e
 
i
t
'
s
 
p
u
b
l
i
c
.
 
A
n
o
n
y
m
o
u
s
 
b
y
 
d
e
f
a
u
l
t
.


 
 
 
 
 
 
 
 
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
6
"
>


 
 
 
 
 
 
 
 
{
/
*
 
C
o
m
p
a
n
y
 
+
 
b
a
s
i
c
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
1
.
 
C
o
m
p
a
n
y
 
&
 
r
o
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
 
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
 
r
e
q
u
i
r
e
d
 
h
i
n
t
=
"
T
y
p
e
 
t
h
e
 
c
o
m
p
a
n
y
 
n
a
m
e
 
—
 
w
e
'
l
l
 
t
r
y
 
t
o
 
m
a
t
c
h
 
i
t
 
a
u
t
o
m
a
t
i
c
a
l
l
y
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
r
e
l
a
t
i
v
e
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
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
a
r
c
h
 
c
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
 
l
e
f
t
-
3
 
t
o
p
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
y
-
1
/
2
 
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
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
F
o
c
u
s
=
{
(
)
 
=
>
 
s
e
t
C
o
m
p
a
n
y
O
p
e
n
(
t
r
u
e
)
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
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
C
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
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
C
o
m
p
a
n
y
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
C
o
m
p
a
n
y
O
p
e
n
(
t
r
u
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
R
a
z
o
r
p
a
y
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
{
`
$
{
i
n
p
u
t
C
l
a
s
s
}
 
p
l
-
9
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
m
p
a
n
y
O
p
e
n
 
&
&
 
c
o
m
p
a
n
y
R
e
s
u
l
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
a
b
s
o
l
u
t
e
 
z
-
1
0
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
m
t
-
1
 
m
a
x
-
h
-
6
4
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
 
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
5
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
 
s
h
a
d
o
w
-
l
g
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
m
p
a
n
y
R
e
s
u
l
t
s
.
m
a
p
(
(
c
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
C
o
m
p
a
n
y
(
c
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
C
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
(
c
.
n
a
m
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
C
o
m
p
a
n
y
O
p
e
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
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
 
g
a
p
-
3
 
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
s
m
 
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
o
r
d
e
r
-
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
l
o
g
o
 
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
c
.
l
o
g
o
}
 
a
l
t
=
"
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
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
c
.
n
a
m
e
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
c
.
c
i
t
y
}
 
·
 
{
c
.
i
n
d
u
s
t
r
y
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
b
u
t
t
o
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
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
e
c
t
e
d
C
o
m
p
a
n
y
 
?
 
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
l
i
m
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
l
i
m
e
-
4
0
0
 
m
t
-
1
.
5
 
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
3
 
h
-
3
"
 
/
>
 
L
i
n
k
e
d
 
t
o
:
 
{
s
e
l
e
c
t
e
d
C
o
m
p
a
n
y
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
>




 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
 
l
a
b
e
l
=
"
R
o
l
e
"
 
r
e
q
u
i
r
e
d
 
h
i
n
t
=
"
e
.
g
.
 
S
D
E
 
I
n
t
e
r
n
,
 
M
L
 
E
n
g
i
n
e
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
r
o
l
e
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
e
)
 
=
>
 
s
e
t
R
o
l
e
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
S
D
E
 
I
n
t
e
r
n
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
{
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
>




 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
 
l
a
b
e
l
=
"
E
x
p
e
r
i
e
n
c
e
 
(
y
e
a
r
s
)
"
 
h
i
n
t
=
"
0
 
f
o
r
 
i
n
t
e
r
n
s
 
/
 
f
r
e
s
h
e
r
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
n
u
m
b
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
=
{
3
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
e
x
p
e
r
i
e
n
c
e
Y
e
a
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
e
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
E
x
p
e
r
i
e
n
c
e
Y
e
a
r
s
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
=
=
=
 
"
"
 
?
 
"
"
 
:
 
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
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
{
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
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
 
R
o
u
n
d
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
 
m
b
-
4
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
2
.
 
R
o
u
n
d
s
 
(
{
t
o
t
a
l
R
o
u
n
d
s
}
)


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
a
d
d
R
o
u
n
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
.
5
 
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
x
s
 
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
9
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
o
r
d
e
r
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
u
s
 
c
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
 
r
o
u
n
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
,
 
i
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
 
p
-
4
 
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
2
 
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
G
r
i
p
V
e
r
t
i
c
a
l
 
c
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
u
n
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
 
1
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
r
e
m
o
v
e
R
o
u
n
d
(
i
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
p
-
1
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
R
e
m
o
v
e
 
r
o
u
n
d
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
4
 
h
-
4
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
 
:
 
n
u
l
l
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
 
l
a
b
e
l
=
"
T
y
p
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
r
.
t
y
p
e
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
e
)
 
=
>
 
u
p
d
a
t
e
R
o
u
n
d
(
i
,
 
"
t
y
p
e
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
a
s
 
I
n
t
e
r
v
i
e
w
R
o
u
n
d
T
y
p
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
{
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
R
O
U
N
D
_
T
Y
P
E
S
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
o
p
t
i
o
n
 
k
e
y
=
{
t
.
v
a
l
u
e
}
 
v
a
l
u
e
=
{
t
.
v
a
l
u
e
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
 
l
a
b
e
l
=
"
D
u
r
a
t
i
o
n
 
(
m
i
n
s
)
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
n
u
m
b
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
=
{
4
8
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
r
.
d
u
r
a
t
i
o
n
M
i
n
s
 
?
?
 
"
"
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
e
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
R
o
u
n
d
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
d
u
r
a
t
i
o
n
M
i
n
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
=
=
=
 
"
"
 
?
 
u
n
d
e
f
i
n
e
d
 
:
 
N
u
m
b
e
r
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
6
0
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
{
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
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
l
o
c
k
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
u
e
s
t
i
o
n
s
 
(
{
r
.
q
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
}
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
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
 
a
d
d
Q
u
e
s
t
i
o
n
(
i
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
x
s
 
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
l
i
m
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
u
n
d
e
r
l
i
n
e
 
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
 
b
o
r
d
e
r
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
+
 
A
d
d
 
q
u
e
s
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
r
.
q
u
e
s
t
i
o
n
s
.
m
a
p
(
(
q
,
 
j
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
[
1
f
r
_
4
0
p
x
]
 
g
a
p
-
2
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
q
.
p
r
o
m
p
t
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
e
)
 
=
>
 
u
p
d
a
t
e
Q
u
e
s
t
i
o
n
(
i
,
 
j
,
 
"
p
r
o
m
p
t
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
F
i
n
d
 
t
h
e
 
l
o
n
g
e
s
t
 
i
n
c
r
e
a
s
i
n
g
 
s
u
b
s
e
q
u
e
n
c
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
{
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
 
r
e
m
o
v
e
Q
u
e
s
t
i
o
n
(
i
,
 
j
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
r
.
q
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
 
=
=
=
 
1
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
3
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
R
e
m
o
v
e
 
q
u
e
s
t
i
o
n
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
4
 
h
-
4
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
 
l
a
b
e
l
=
"
N
o
t
e
s
 
f
o
r
 
t
h
i
s
 
r
o
u
n
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
r
.
n
o
t
e
s
 
?
?
 
"
"
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
e
)
 
=
>
 
u
p
d
a
t
e
R
o
u
n
d
(
i
,
 
"
n
o
t
e
s
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
A
n
y
t
h
i
n
g
 
a
b
o
u
t
 
t
h
e
 
f
o
r
m
a
t
,
 
i
n
t
e
r
v
i
e
w
e
r
 
v
i
b
e
,
 
w
h
a
t
 
t
h
e
y
 
f
o
c
u
s
e
d
 
o
n
.
.
.
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
{
`
$
{
i
n
p
u
t
C
l
a
s
s
}
 
r
e
s
i
z
e
-
y
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
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
 
T
i
p
s
 
+
 
R
e
s
o
u
r
c
e
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
3
.
 
T
i
p
s
 
&
 
p
r
e
p
a
r
a
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
 
l
a
b
e
l
=
"
T
i
p
s
 
f
o
r
 
f
u
t
u
r
e
 
c
a
n
d
i
d
a
t
e
s
"
 
h
i
n
t
=
"
W
h
a
t
 
w
o
u
l
d
 
y
o
u
 
t
e
l
l
 
y
o
u
r
 
p
a
s
t
 
s
e
l
f
?
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
t
i
p
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
e
)
 
=
>
 
s
e
t
T
i
p
s
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
P
r
a
c
t
i
c
e
 
D
S
A
 
o
n
 
L
e
e
t
C
o
d
e
,
 
f
o
c
u
s
 
o
n
 
s
y
s
t
e
m
 
d
e
s
i
g
n
 
f
o
r
 
s
e
n
i
o
r
 
r
o
l
e
s
.
.
.
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
{
`
$
{
i
n
p
u
t
C
l
a
s
s
}
 
r
e
s
i
z
e
-
y
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
>




 
 
 
 
 
 
 
 
 
 
 
 
<
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
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
l
o
c
k
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
r
e
p
 
r
e
s
o
u
r
c
e
s
 
(
{
p
r
e
p
R
e
s
o
u
r
c
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
l
a
b
e
l
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
a
d
d
R
e
s
o
u
r
c
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
l
i
m
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
l
i
m
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
u
n
d
e
r
l
i
n
e
 
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
 
b
o
r
d
e
r
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
+
 
A
d
d
 
r
e
s
o
u
r
c
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
p
r
e
p
R
e
s
o
u
r
c
e
s
.
m
a
p
(
(
p
,
 
i
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
[
1
2
0
p
x
_
1
f
r
_
1
f
r
_
4
0
p
x
]
 
g
a
p
-
2
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
p
.
t
y
p
e
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
e
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
R
e
s
o
u
r
c
e
(
i
,
 
"
t
y
p
e
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
a
s
 
I
n
t
e
r
v
i
e
w
P
r
e
p
R
e
s
o
u
r
c
e
[
"
t
y
p
e
"
]
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
{
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
a
r
t
i
c
l
e
"
>
A
r
t
i
c
l
e
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
b
o
o
k
"
>
B
o
o
k
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
c
o
u
r
s
e
"
>
C
o
u
r
s
e
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
o
t
h
e
r
"
>
O
t
h
e
r
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
p
.
t
i
t
l
e
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
e
)
 
=
>
 
u
p
d
a
t
e
R
e
s
o
u
r
c
e
(
i
,
 
"
t
i
t
l
e
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
T
i
t
l
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
{
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
u
r
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
p
.
u
r
l
 
?
?
 
"
"
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
e
)
 
=
>
 
u
p
d
a
t
e
R
e
s
o
u
r
c
e
(
i
,
 
"
u
r
l
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
h
t
t
p
s
:
/
/
.
.
.
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
{
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
 
r
e
m
o
v
e
R
e
s
o
u
r
c
e
(
i
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
R
e
m
o
v
e
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
4
 
h
-
4
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
 
A
n
o
n
y
m
i
t
y
 
+
 
S
u
b
m
i
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
 
g
a
p
-
3
 
m
b
-
4
 
p
-
3
 
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
I
n
f
o
 
c
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
 
s
h
r
i
n
k
-
0
 
m
t
-
0
.
5
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
o
n
'
t
 
s
h
a
r
e
 
N
D
A
-
p
r
o
t
e
c
t
e
d
 
c
o
n
t
e
n
t
,
 
c
o
n
f
i
d
e
n
t
i
a
l
 
p
r
o
b
l
e
m
s
 
y
o
u
 
s
i
g
n
e
d
 
a
 
f
o
r
m
 
f
o
r
,
 
o
r
 
a
n
y
t
h
i
n
g
 
t
h
a
t
 
c
o
u
l
d
 
v
i
o
l
a
t
e
 
y
o
u
r
 
a
g
r
e
e
m
e
n
t
.
 
Q
u
e
s
t
i
o
n
s
,
 
r
o
u
n
d
s
,
 
a
n
d
 
d
i
f
f
i
c
u
l
t
y
 
a
r
e
 
f
i
n
e
 
t
o
 
s
h
a
r
e
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
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
a
n
o
n
y
m
o
u
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
c
h
e
c
k
b
o
x
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
h
e
c
k
e
d
=
{
i
s
A
n
o
n
y
m
o
u
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
e
)
 
=
>
 
s
e
t
I
s
A
n
o
n
y
m
o
u
s
(
e
.
t
a
r
g
e
t
.
c
h
e
c
k
e
d
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
4
 
h
-
4
 
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
2
0
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
t
m
l
F
o
r
=
"
a
n
o
n
y
m
o
u
s
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
s
m
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
o
s
t
 
a
n
o
n
y
m
o
u
s
l
y
 
(
y
o
u
r
 
c
o
l
l
e
g
e
 
s
t
a
y
s
 
v
i
s
i
b
l
e
,
 
y
o
u
r
 
n
a
m
e
 
i
s
 
h
i
d
d
e
n
)


 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
s
u
b
m
i
t
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
!
c
a
n
S
u
b
m
i
t
 
|
|
 
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


 
 
 
 
 
 
 
 
 
 
 
 
c
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
 
p
x
-
5
 
p
y
-
2
.
5
 
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
 
h
o
v
e
r
:
b
g
-
l
i
m
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
s
t
o
n
e
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
m
d
 
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
4
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"


 
 
 
 
 
 
 
 
 
 
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
 
f
o
r
 
r
e
v
i
e
w
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
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
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
 
g
o
e
s
 
i
n
t
o
 
m
o
d
e
r
a
t
i
o
n
.
 
Y
o
u
'
l
l
 
s
e
e
 
i
t
 
o
n
 
y
o
u
r
 
p
r
o
f
i
l
e
 
o
n
c
e
 
a
p
p
r
o
v
e
d
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


