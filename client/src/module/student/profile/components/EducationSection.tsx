
i
m
p
o
r
t
 
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
 
C
a
l
e
n
d
a
r
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
,
 
i
n
p
u
t
E
r
r
o
r
C
l
a
s
s
,
 
l
a
b
e
l
C
l
a
s
s
 
}
 
f
r
o
m
 
"
.
/
s
t
y
l
e
s
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
 
C
o
l
l
e
g
e
S
u
g
g
e
s
t
i
o
n
 
{


 
 
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


 
 
c
o
u
n
t
r
y
:
 
s
t
r
i
n
g
;


 
 
s
t
a
t
e
P
r
o
v
i
n
c
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
 
E
d
u
c
a
t
i
o
n
S
e
c
t
i
o
n
P
r
o
p
s
 
{


 
 
c
o
l
l
e
g
e
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
:
 
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
;


 
 
c
o
m
p
a
n
y
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
:
 
s
t
r
i
n
g
;


 
 
f
i
e
l
d
E
r
r
o
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
 
s
t
r
i
n
g
[
]
>
;


 
 
c
o
l
l
e
g
e
S
u
g
g
e
s
t
i
o
n
s
:
 
C
o
l
l
e
g
e
S
u
g
g
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
l
l
e
g
e
L
o
a
d
i
n
g
:
 
b
o
o
l
e
a
n
;


 
 
s
h
o
w
C
o
l
l
e
g
e
S
u
g
g
e
s
t
i
o
n
s
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
l
l
e
g
e
I
n
p
u
t
R
e
f
:
 
R
e
a
c
t
.
R
e
f
O
b
j
e
c
t
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
 
|
 
n
u
l
l
>
;


 
 
c
o
l
l
e
g
e
D
r
o
p
d
o
w
n
R
e
f
:
 
R
e
a
c
t
.
R
e
f
O
b
j
e
c
t
<
H
T
M
L
D
i
v
E
l
e
m
e
n
t
 
|
 
n
u
l
l
>
;


 
 
o
n
C
o
l
l
e
g
e
C
h
a
n
g
e
:
 
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
 
v
o
i
d
;


 
 
o
n
C
o
l
l
e
g
e
F
o
c
u
s
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
S
e
l
e
c
t
C
o
l
l
e
g
e
:
 
(
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
C
h
a
n
g
e
:
 
(
f
i
e
l
d
:
 
s
t
r
i
n
g
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
 
=
>
 
v
o
i
d
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
E
r
r
o
r
(
{
 
e
r
r
s
 
}
:
 
{
 
e
r
r
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
 
}
)
 
{


 
 
i
f
 
(
!
e
r
r
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
 
n
u
l
l
;


 
 
r
e
t
u
r
n
 
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
r
e
d
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
r
e
d
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
e
r
r
s
[
0
]
}
<
/
p
>
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
E
d
u
c
a
t
i
o
n
S
e
c
t
i
o
n
(
{


 
 
c
o
l
l
e
g
e
,


 
 
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
,


 
 
c
o
m
p
a
n
y
,


 
 
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
,


 
 
f
i
e
l
d
E
r
r
o
r
s
,


 
 
c
o
l
l
e
g
e
S
u
g
g
e
s
t
i
o
n
s
,


 
 
c
o
l
l
e
g
e
L
o
a
d
i
n
g
,


 
 
s
h
o
w
C
o
l
l
e
g
e
S
u
g
g
e
s
t
i
o
n
s
,


 
 
c
o
l
l
e
g
e
I
n
p
u
t
R
e
f
,


 
 
c
o
l
l
e
g
e
D
r
o
p
d
o
w
n
R
e
f
,


 
 
o
n
C
o
l
l
e
g
e
C
h
a
n
g
e
,


 
 
o
n
C
o
l
l
e
g
e
F
o
c
u
s
,


 
 
o
n
S
e
l
e
c
t
C
o
l
l
e
g
e
,


 
 
o
n
C
h
a
n
g
e
,


}
:
 
E
d
u
c
a
t
i
o
n
S
e
c
t
i
o
n
P
r
o
p
s
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
p
x
-
5
 
p
y
-
5
 
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
4
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
{
l
a
b
e
l
C
l
a
s
s
}
>
<
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
 
c
l
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
 
C
o
l
l
e
g
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
c
o
l
l
e
g
e
I
n
p
u
t
R
e
f
}
 
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
l
l
e
g
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
 
o
n
C
o
l
l
e
g
e
C
h
a
n
g
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


 
 
 
 
 
 
 
 
 
 
 
 
o
n
F
o
c
u
s
=
{
o
n
C
o
l
l
e
g
e
F
o
c
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
t
a
r
t
 
t
y
p
i
n
g
 
c
o
l
l
e
g
e
 
n
a
m
e
.
.
.
"
 
a
u
t
o
C
o
m
p
l
e
t
e
=
"
o
f
f
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
{
c
o
l
l
e
g
e
L
o
a
d
i
n
g
 
&
&
 
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
a
b
s
o
l
u
t
e
 
r
i
g
h
t
-
3
 
t
o
p
-
1
0
 
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
}


 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
C
o
l
l
e
g
e
S
u
g
g
e
s
t
i
o
n
s
 
&
&
 
c
o
l
l
e
g
e
S
u
g
g
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
r
e
f
=
{
c
o
l
l
e
g
e
D
r
o
p
d
o
w
n
R
e
f
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
 
z
-
5
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
 
t
o
p
-
f
u
l
l
 
m
t
-
1
 
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
 
s
h
a
d
o
w
-
l
g
 
m
a
x
-
h
-
5
6
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
l
l
e
g
e
S
u
g
g
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
c
,
 
i
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
i
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
 
o
n
S
e
l
e
c
t
C
o
l
l
e
g
e
(
c
.
n
a
m
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
s
t
a
r
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
b
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
 
m
t
-
0
.
5
"
>
{
c
.
s
t
a
t
e
P
r
o
v
i
n
c
e
 
?
 
`
$
{
c
.
s
t
a
t
e
P
r
o
v
i
n
c
e
}
,
 
`
 
:
 
"
"
}
{
c
.
c
o
u
n
t
r
y
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
{
l
a
b
e
l
C
l
a
s
s
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
 
c
l
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
 
y
e
a
r
<
/
l
a
b
e
l
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
 
v
a
l
u
e
=
{
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
 
o
n
C
h
a
n
g
e
(
"
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
 
?
 
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
 
:
 
n
u
l
l
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
f
i
e
l
d
E
r
r
o
r
s
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
 
?
 
i
n
p
u
t
E
r
r
o
r
C
l
a
s
s
 
:
 
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
 
2
0
2
6
"
 
m
i
n
=
{
1
9
9
0
}
 
m
a
x
=
{
2
0
4
0
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
E
r
r
o
r
 
e
r
r
s
=
{
f
i
e
l
d
E
r
r
o
r
s
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
4
"
>


 
 
 
 
 
 
 
 
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
{
l
a
b
e
l
C
l
a
s
s
}
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
 
C
o
m
p
a
n
y
<
/
l
a
b
e
l
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
 
o
n
C
h
a
n
g
e
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
 
c
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
 
G
o
o
g
l
e
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
{
l
a
b
e
l
C
l
a
s
s
}
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
 
R
o
l
e
<
/
l
a
b
e
l
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
 
o
n
C
h
a
n
g
e
(
"
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
 
c
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
 
C
S
 
S
t
u
d
e
n
t
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


