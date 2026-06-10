
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
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
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
 
B
o
o
k
O
p
e
n
,
 
G
l
o
b
e
,
 
N
e
t
w
o
r
k
 
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
 
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
 
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
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
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
Q
u
i
z
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
P
U
R
P
L
E
 
=
 
"
#
8
b
5
c
f
6
"
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
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
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
5
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
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
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
"
,


 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
,


}
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




f
u
n
c
t
i
o
n
 
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
(
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
h
3
 
s
t
y
l
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
T
i
t
l
e
}
>
S
e
r
v
i
c
e
s
 
d
o
n
&
r
s
q
u
o
;
t
 
c
a
l
l
 
e
a
c
h
 
o
t
h
e
r
.
 
T
h
e
y
 
e
m
i
t
 
e
v
e
n
t
s
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
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
D
e
s
c
}
>


 
 
 
 
 
 
 
 
I
n
 
<
b
>
e
v
e
n
t
-
d
r
i
v
e
n
 
a
r
c
h
i
t
e
c
t
u
r
e
 
(
E
D
A
)
<
/
b
>
,
 
s
e
r
v
i
c
e
s
 
c
o
m
m
u
n
i
c
a
t
e
 
b
y
 
p
u
b
l
i
s
h
i
n
g
 
f
a
c
t
s
 
a
b
o
u
t


 
 
 
 
 
 
 
 
w
h
a
t
 
j
u
s
t
 
h
a
p
p
e
n
e
d
 
(
&
l
d
q
u
o
;
O
r
d
e
r
P
l
a
c
e
d
&
r
d
q
u
o
;
,
 
&
l
d
q
u
o
;
P
a
y
m
e
n
t
S
u
c
c
e
e
d
e
d
&
r
d
q
u
o
;
)
.
 
O
t
h
e
r
 
s
e
r
v
i
c
e
s
 
s
u
b
s
c
r
i
b
e
 
t
o


 
 
 
 
 
 
 
 
t
h
e
 
f
a
c
t
s
 
t
h
e
y
 
c
a
r
e
 
a
b
o
u
t
.
 
T
h
e
 
p
u
b
l
i
s
h
e
r
 
d
o
e
s
n
&
r
s
q
u
o
;
t
 
k
n
o
w
 
w
h
o
&
r
s
q
u
o
;
s
 
l
i
s
t
e
n
i
n
g
 
—
 
i
t
 
j
u
s
t
 
r
e
c
o
r
d
s


 
 
 
 
 
 
 
 
w
h
a
t
 
h
a
p
p
e
n
e
d
 
a
n
d
 
m
o
v
e
s
 
o
n
.


 
 
 
 
 
 
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
6
"
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
"
R
e
q
u
e
s
t
-
d
r
i
v
e
n
 
(
R
E
S
T
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,


 
 
 
 
 
 
 
 
 
 
 
 
t
a
g
l
i
n
e
:
 
"
S
e
r
v
i
c
e
 
A
 
c
a
l
l
s
 
s
e
r
v
i
c
e
 
B
 
a
n
d
 
w
a
i
t
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
s
:
 
"
E
a
s
y
 
t
o
 
r
e
a
s
o
n
 
a
b
o
u
t
.
 
S
y
n
c
h
r
o
n
o
u
s
.
 
D
i
r
e
c
t
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
:
 
"
T
i
g
h
t
 
c
o
u
p
l
i
n
g
.
 
A
'
s
 
l
a
t
e
n
c
y
 
d
e
p
e
n
d
s
 
o
n
 
B
'
s
.
 
A
d
d
i
n
g
 
a
 
n
e
w
 
c
o
n
s
u
m
e
r
 
m
e
a
n
s
 
c
h
a
n
g
i
n
g
 
A
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
"
E
v
e
n
t
-
d
r
i
v
e
n
 
(
E
D
A
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
t
a
g
l
i
n
e
:
 
"
S
e
r
v
i
c
e
 
A
 
p
u
b
l
i
s
h
e
s
;
 
B
,
 
C
,
 
D
 
s
u
b
s
c
r
i
b
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
s
:
 
"
L
o
o
s
e
 
c
o
u
p
l
i
n
g
.
 
N
e
w
 
c
o
n
s
u
m
e
r
s
 
a
r
e
 
a
d
d
e
d
 
w
i
t
h
o
u
t
 
t
o
u
c
h
i
n
g
 
A
.
 
N
a
t
u
r
a
l
l
y
 
a
s
y
n
c
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
:
 
"
H
a
r
d
e
r
 
d
e
b
u
g
g
i
n
g
.
 
E
v
e
n
t
u
a
l
 
c
o
n
s
i
s
t
e
n
c
y
.
 
S
c
h
e
m
a
 
e
v
o
l
u
t
i
o
n
 
r
e
q
u
i
r
e
s
 
c
a
r
e
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
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
p
.
n
a
m
e
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
2
 
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
5
,
 
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
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
8
p
x
 
2
0
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
p
.
c
o
l
o
r
}
5
5
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
p
.
c
o
l
o
r
}
0
8
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
1
r
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>
{
p
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
p
.
c
o
l
o
r
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
6
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
t
a
g
l
i
n
e
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
R
O
S


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>
{
p
.
p
r
o
s
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
O
N
S


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>
{
p
.
c
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
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
R
E
A
L
 
E
X
A
M
P
L
E
S


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
>
U
b
e
r
<
/
b
>
 
t
r
i
p
 
l
i
f
e
c
y
c
l
e
 
i
s
 
e
v
e
n
t
-
d
r
i
v
e
n
:
 
t
r
i
p
-
r
e
q
u
e
s
t
e
d
,
 
d
r
i
v
e
r
-
m
a
t
c
h
e
d
,
 
p
i
c
k
u
p
-
a
r
r
i
v
e
d
,


 
 
 
 
 
 
 
 
 
 
t
r
i
p
-
e
n
d
e
d
 
e
a
c
h
 
f
a
n
 
o
u
t
 
t
o
 
b
i
l
l
i
n
g
,
 
r
a
t
i
n
g
s
,
 
s
u
r
g
e
-
p
r
i
c
i
n
g
,
 
f
r
a
u
d
.
 
<
b
>
S
t
r
i
p
e
<
/
b
>
 
e
x
p
o
s
e
s


 
 
 
 
 
 
 
 
 
 
w
e
b
h
o
o
k
s
 
(
e
v
e
n
t
s
)
 
f
o
r
 
e
v
e
r
y
t
h
i
n
g
:
 
c
h
a
r
g
e
.
s
u
c
c
e
e
d
e
d
,
 
p
a
y
m
e
n
t
_
i
n
t
e
n
t
.
p
r
o
c
e
s
s
i
n
g
.
 
<
b
>
A
W
S


 
 
 
 
 
 
 
 
 
 
E
v
e
n
t
B
r
i
d
g
e
<
/
b
>
 
+
 
<
b
>
K
a
f
k
a
<
/
b
>
 
+
 
<
b
>
N
A
T
S
<
/
b
>
 
a
r
e
 
c
o
m
m
o
n
 
b
a
c
k
b
o
n
e
s
.
 
S
a
m
e
 
p
a
t
t
e
r
n
 
u
n
d
e
r
 
t
h
e


 
 
 
 
 
 
 
 
 
 
h
o
o
d
:
 
a
p
p
e
n
d
 
a
 
f
a
c
t
,
 
l
e
t
 
l
i
s
t
e
n
e
r
s
 
r
e
a
c
t
.


 
 
 
 
 
 
 
 
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




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
I
n
t
e
r
a
c
t
i
v
e
 
s
e
r
v
i
c
e
 
g
r
a
p
h
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
e
r
v
i
c
e
 
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


 
 
x
:
 
n
u
m
b
e
r
;


 
 
y
:
 
n
u
m
b
e
r
;


 
 
e
m
i
t
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


 
 
c
o
n
s
u
m
e
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


}




c
o
n
s
t
 
S
E
R
V
I
C
E
S
:
 
S
e
r
v
i
c
e
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
o
r
d
e
r
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
r
d
e
r
 
S
e
r
v
i
c
e
"
,


 
 
 
 
x
:
 
6
0
,


 
 
 
 
y
:
 
1
4
0
,


 
 
 
 
e
m
i
t
s
:
 
[
"
O
r
d
e
r
P
l
a
c
e
d
"
,
 
"
O
r
d
e
r
C
a
n
c
e
l
e
d
"
]
,


 
 
 
 
c
o
n
s
u
m
e
s
:
 
[
"
P
a
y
m
e
n
t
S
u
c
c
e
e
d
e
d
"
,
 
"
P
a
y
m
e
n
t
F
a
i
l
e
d
"
,
 
"
I
n
v
e
n
t
o
r
y
R
e
s
e
r
v
e
d
"
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
p
a
y
m
e
n
t
"
,


 
 
 
 
l
a
b
e
l
:
 
"
P
a
y
m
e
n
t
 
S
e
r
v
i
c
e
"
,


 
 
 
 
x
:
 
2
8
0
,


 
 
 
 
y
:
 
5
0
,


 
 
 
 
e
m
i
t
s
:
 
[
"
P
a
y
m
e
n
t
S
u
c
c
e
e
d
e
d
"
,
 
"
P
a
y
m
e
n
t
F
a
i
l
e
d
"
]
,


 
 
 
 
c
o
n
s
u
m
e
s
:
 
[
"
O
r
d
e
r
P
l
a
c
e
d
"
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
i
n
v
e
n
t
o
r
y
"
,


 
 
 
 
l
a
b
e
l
:
 
"
I
n
v
e
n
t
o
r
y
 
S
e
r
v
i
c
e
"
,


 
 
 
 
x
:
 
2
8
0
,


 
 
 
 
y
:
 
2
3
0
,


 
 
 
 
e
m
i
t
s
:
 
[
"
I
n
v
e
n
t
o
r
y
R
e
s
e
r
v
e
d
"
,
 
"
I
n
v
e
n
t
o
r
y
R
e
l
e
a
s
e
d
"
]
,


 
 
 
 
c
o
n
s
u
m
e
s
:
 
[
"
O
r
d
e
r
P
l
a
c
e
d
"
,
 
"
O
r
d
e
r
C
a
n
c
e
l
e
d
"
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
h
i
p
p
i
n
g
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
h
i
p
p
i
n
g
 
S
e
r
v
i
c
e
"
,


 
 
 
 
x
:
 
5
0
0
,


 
 
 
 
y
:
 
5
0
,


 
 
 
 
e
m
i
t
s
:
 
[
"
S
h
i
p
m
e
n
t
D
i
s
p
a
t
c
h
e
d
"
]
,


 
 
 
 
c
o
n
s
u
m
e
s
:
 
[
"
P
a
y
m
e
n
t
S
u
c
c
e
e
d
e
d
"
,
 
"
I
n
v
e
n
t
o
r
y
R
e
s
e
r
v
e
d
"
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
e
m
a
i
l
"
,


 
 
 
 
l
a
b
e
l
:
 
"
E
m
a
i
l
 
S
e
r
v
i
c
e
"
,


 
 
 
 
x
:
 
5
0
0
,


 
 
 
 
y
:
 
2
3
0
,


 
 
 
 
e
m
i
t
s
:
 
[
]
,


 
 
 
 
c
o
n
s
u
m
e
s
:
 
[
"
O
r
d
e
r
P
l
a
c
e
d
"
,
 
"
P
a
y
m
e
n
t
S
u
c
c
e
e
d
e
d
"
,
 
"
S
h
i
p
m
e
n
t
D
i
s
p
a
t
c
h
e
d
"
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
a
n
a
l
y
t
i
c
s
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
n
a
l
y
t
i
c
s
"
,


 
 
 
 
x
:
 
6
6
0
,


 
 
 
 
y
:
 
1
4
0
,


 
 
 
 
e
m
i
t
s
:
 
[
]
,


 
 
 
 
c
o
n
s
u
m
e
s
:
 
[
"
O
r
d
e
r
P
l
a
c
e
d
"
,
 
"
P
a
y
m
e
n
t
S
u
c
c
e
e
d
e
d
"
,
 
"
I
n
v
e
n
t
o
r
y
R
e
s
e
r
v
e
d
"
,
 
"
S
h
i
p
m
e
n
t
D
i
s
p
a
t
c
h
e
d
"
]
,


 
 
}
,


]
;




f
u
n
c
t
i
o
n
 
S
e
r
v
i
c
e
G
r
a
p
h
(
)
 
{


 
 
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
"
o
r
d
e
r
"
)
;


 
 
c
o
n
s
t
 
s
e
l
 
=
 
S
E
R
V
I
C
E
S
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
i
d
 
=
=
=
 
s
e
l
e
c
t
e
d
)
;




 
 
/
/
 
C
o
m
p
u
t
e
 
r
e
l
a
t
i
o
n
s
h
i
p
s
 
f
o
r
 
t
h
e
 
h
i
g
h
l
i
g
h
t
e
d
 
s
e
r
v
i
c
e


 
 
c
o
n
s
t
 
i
n
b
o
u
n
d
E
v
e
n
t
s
 
=
 
s
e
l
?
.
c
o
n
s
u
m
e
s
 
?
?
 
[
]
;


 
 
c
o
n
s
t
 
o
u
t
b
o
u
n
d
E
v
e
n
t
s
 
=
 
s
e
l
?
.
e
m
i
t
s
 
?
?
 
[
]
;


 
 
c
o
n
s
t
 
i
n
b
o
u
n
d
F
r
o
m
 
=
 
i
n
b
o
u
n
d
E
v
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
e
v
)
 
=
>
 
S
E
R
V
I
C
E
S
.
f
i
l
t
e
r
(
(
s
)
 
=
>
 
s
.
e
m
i
t
s
.
i
n
c
l
u
d
e
s
(
e
v
)
)
.
m
a
p
(
(
s
)
 
=
>
 
s
.
i
d
)
)
.
f
l
a
t
(
)
;


 
 
c
o
n
s
t
 
o
u
t
b
o
u
n
d
T
o
 
=
 
o
u
t
b
o
u
n
d
E
v
e
n
t
s
.
f
l
a
t
M
a
p
(
(
e
v
)
 
=
>
 
S
E
R
V
I
C
E
S
.
f
i
l
t
e
r
(
(
s
)
 
=
>
 
s
.
c
o
n
s
u
m
e
s
.
i
n
c
l
u
d
e
s
(
e
v
)
)
.
m
a
p
(
(
s
)
 
=
>
 
(
{
 
t
o
:
 
s
.
i
d
,
 
e
v
 
}
)
)
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
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
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
T
i
t
l
e
}
>
C
l
i
c
k
 
a
n
y
 
s
e
r
v
i
c
e
.
 
S
e
e
 
w
h
a
t
 
f
l
o
w
s
 
i
n
 
a
n
d
 
o
u
t
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
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
D
e
s
c
}
>


 
 
 
 
 
 
 
 
A
n
 
e
-
c
o
m
m
e
r
c
e
 
p
l
a
t
f
o
r
m
 
w
i
t
h
 
6
 
s
e
r
v
i
c
e
s
.
 
S
o
l
i
d
 
l
i
m
e
 
a
r
r
o
w
s
 
a
r
e
 
e
v
e
n
t
s
 
e
m
i
t
t
e
d
 
b
y
 
t
h
e


 
 
 
 
 
 
 
 
s
e
l
e
c
t
e
d
 
s
e
r
v
i
c
e
;
 
p
u
r
p
l
e
 
a
r
e
 
e
v
e
n
t
s
 
i
t
 
s
u
b
s
c
r
i
b
e
s
 
t
o
.
 
T
h
e
 
s
h
a
p
e
 
o
f
 
t
h
e
s
e
 
a
r
r
o
w
s
 
i
s
 
t
h
e


 
 
 
 
 
 
 
 
s
e
r
v
i
c
e
&
r
s
q
u
o
;
s
 
c
o
n
t
r
a
c
t
 
w
i
t
h
 
t
h
e
 
r
e
s
t
 
o
f
 
t
h
e
 
s
y
s
t
e
m
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
0
b
1
2
2
0
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
2
2
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
s
v
g
 
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
 
7
6
0
 
3
6
0
"
 
w
i
d
t
h
=
"
1
0
0
%
"
 
s
t
y
l
e
=
{
{
 
m
a
x
W
i
d
t
h
:
 
8
0
0
,
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
o
u
t
b
o
u
n
d
 
e
d
g
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
s
e
l
 
&
&
 
o
u
t
b
o
u
n
d
T
o
.
m
a
p
(
(
{
 
t
o
,
 
e
v
 
}
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
 
t
a
r
g
e
t
 
=
 
S
E
R
V
I
C
E
S
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
i
d
 
=
=
=
 
t
o
)
!
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
g
 
k
e
y
=
{
`
o
u
t
-
$
{
e
v
}
-
$
{
t
o
}
-
$
{
i
}
`
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
3
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
s
e
l
.
x
 
+
 
7
0
}
 
y
1
=
{
s
e
l
.
y
 
+
 
3
0
}
 
x
2
=
{
t
a
r
g
e
t
.
x
 
+
 
7
0
}
 
y
2
=
{
t
a
r
g
e
t
.
y
 
+
 
3
0
}
 
s
t
r
o
k
e
=
{
S
D
}
 
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
1
.
5
}
 
s
t
r
o
k
e
O
p
a
c
i
t
y
=
{
0
.
6
}
 
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
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
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
 
c
x
:
 
s
e
l
.
x
 
+
 
7
0
,
 
c
y
:
 
s
e
l
.
y
 
+
 
3
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
 
c
x
:
 
t
a
r
g
e
t
.
x
 
+
 
7
0
,
 
c
y
:
 
t
a
r
g
e
t
.
y
 
+
 
3
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
 
1
.
4
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
,
 
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
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
g
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
i
n
b
o
u
n
d
 
e
d
g
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
s
e
l
 
&
&
 
i
n
b
o
u
n
d
F
r
o
m
.
m
a
p
(
(
f
r
o
m
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
o
u
r
c
e
 
=
 
S
E
R
V
I
C
E
S
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
i
d
 
=
=
=
 
f
r
o
m
)
!
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
g
 
k
e
y
=
{
`
i
n
-
$
{
f
r
o
m
}
-
$
{
i
}
`
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
3
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
s
o
u
r
c
e
.
x
 
+
 
7
0
}
 
y
1
=
{
s
o
u
r
c
e
.
y
 
+
 
3
0
}
 
x
2
=
{
s
e
l
.
x
 
+
 
7
0
}
 
y
2
=
{
s
e
l
.
y
 
+
 
3
0
}
 
s
t
r
o
k
e
=
{
P
U
R
P
L
E
}
 
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
1
.
5
}
 
s
t
r
o
k
e
O
p
a
c
i
t
y
=
{
0
.
4
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
3
 
4
"
 
/
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
g
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
f
a
i
n
t
 
g
r
e
y
 
e
d
g
e
s
 
f
o
r
 
n
o
n
-
s
e
l
e
c
t
e
d
 
p
a
t
h
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
!
s
e
l
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
S
E
R
V
I
C
E
S
.
f
l
a
t
M
a
p
(
(
s
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
.
e
m
i
t
s
.
f
l
a
t
M
a
p
(
(
e
v
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
E
R
V
I
C
E
S
.
f
i
l
t
e
r
(
(
t
)
 
=
>
 
t
.
c
o
n
s
u
m
e
s
.
i
n
c
l
u
d
e
s
(
e
v
)
)
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
{
 
s
,
 
t
,
 
e
v
 
}
)
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
 
 
 
 
)
.
m
a
p
(
(
{
 
s
,
 
t
,
 
e
v
 
}
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
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
e
v
}
`
}
 
x
1
=
{
s
.
x
 
+
 
7
0
}
 
y
1
=
{
s
.
y
 
+
 
3
0
}
 
x
2
=
{
t
.
x
 
+
 
7
0
}
 
y
2
=
{
t
.
y
 
+
 
3
0
}
 
s
t
r
o
k
e
=
{
N
E
U
T
R
A
L
}
 
s
t
r
o
k
e
O
p
a
c
i
t
y
=
{
0
.
2
}
 
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
1
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
s
e
r
v
i
c
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
S
E
R
V
I
C
E
S
.
m
a
p
(
(
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
S
e
l
 
=
 
s
.
i
d
 
=
=
=
 
s
e
l
e
c
t
e
d
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
I
n
b
o
u
n
d
 
=
 
s
e
l
 
?
 
i
n
b
o
u
n
d
F
r
o
m
.
i
n
c
l
u
d
e
s
(
s
.
i
d
)
 
:
 
f
a
l
s
e
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
O
u
t
b
o
u
n
d
 
=
 
s
e
l
 
?
 
o
u
t
b
o
u
n
d
T
o
.
s
o
m
e
(
(
o
)
 
=
>
 
o
.
t
o
 
=
=
=
 
s
.
i
d
)
 
:
 
f
a
l
s
e
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
i
s
S
e
l
 
?
 
S
D
 
:
 
i
s
O
u
t
b
o
u
n
d
 
?
 
S
D
 
:
 
i
s
I
n
b
o
u
n
d
 
?
 
P
U
R
P
L
E
 
:
 
N
E
U
T
R
A
L
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
i
m
 
=
 
s
e
l
 
&
&
 
!
i
s
S
e
l
 
&
&
 
!
i
s
I
n
b
o
u
n
d
 
&
&
 
!
i
s
O
u
t
b
o
u
n
d
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
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
i
d
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
(
s
.
i
d
 
=
=
=
 
s
e
l
e
c
t
e
d
 
?
 
n
u
l
l
 
:
 
s
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
 
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
 
d
i
m
 
?
 
0
.
3
5
 
:
 
1
 
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
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
S
e
l
 
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
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
s
.
x
 
-
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
s
.
y
 
-
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
1
4
8
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
6
8
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
x
=
{
1
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
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
.
3
,
 
s
c
a
l
e
:
 
1
 
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
 
0
,
 
s
c
a
l
e
:
 
1
.
0
8
 
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
 
1
.
4
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
s
.
x
}
 
y
=
{
s
.
y
}
 
w
i
d
t
h
=
{
1
4
0
}
 
h
e
i
g
h
t
=
{
6
0
}
 
r
x
=
{
8
}
 
f
i
l
l
=
{
`
$
{
c
}
2
2
`
}
 
s
t
r
o
k
e
=
{
c
}
 
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
i
s
S
e
l
 
?
 
2
 
:
 
1
.
5
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
s
.
x
 
+
 
7
0
}
 
y
=
{
s
.
y
 
+
 
2
6
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
#
e
5
e
7
e
b
"
 
f
o
n
t
S
i
z
e
=
{
1
2
}
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
s
.
x
 
+
 
7
0
}
 
y
=
{
s
.
y
 
+
 
4
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
{
c
}
 
f
o
n
t
S
i
z
e
=
{
9
.
5
}
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
m
i
t
s
 
{
s
.
e
m
i
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
 
·
 
s
u
b
s
 
{
s
.
c
o
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
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
g
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
<
/
s
v
g
>




 
 
 
 
 
 
 
 
{
s
e
l
 
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
e
l
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
 
8
 
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
3
 
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
t
-
4
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
5
5
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
S
D
}
1
0
`
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
M
I
T
S
 
(
{
s
e
l
.
e
m
i
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
.
e
m
i
t
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
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
u
r
e
 
c
o
n
s
u
m
e
r
 
(
n
o
 
e
v
e
n
t
s
 
e
m
i
t
t
e
d
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
.
e
m
i
t
s
.
m
a
p
(
(
e
v
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
e
v
}
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
→
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
{
e
v
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
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
P
U
R
P
L
E
}
5
5
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
P
U
R
P
L
E
}
1
0
`
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
P
U
R
P
L
E
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
U
B
S
C
R
I
B
E
S
 
T
O
 
(
{
s
e
l
.
c
o
n
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
.
c
o
n
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
u
r
e
 
p
u
b
l
i
s
h
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
.
c
o
n
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
e
v
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
e
v
}
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
←
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
P
U
R
P
L
E
 
}
}
>
{
e
v
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




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
W
h
e
n
 
E
D
A
 
w
i
n
s
,
 
w
h
e
n
 
i
t
 
d
o
e
s
n
'
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
R
U
L
E
S
 
=
 
[


 
 
{


 
 
 
 
w
h
e
n
:
 
"
M
u
l
t
i
p
l
e
 
i
n
d
e
p
e
n
d
e
n
t
 
r
e
a
c
t
i
o
n
s
 
t
o
 
o
n
e
 
f
a
c
t
"
,


 
 
 
 
p
i
c
k
:
 
"
E
D
A
"
,


 
 
 
 
e
x
:
 
"
O
r
d
e
r
 
p
l
a
c
e
d
 
→
 
e
m
a
i
l
 
+
 
a
n
a
l
y
t
i
c
s
 
+
 
w
a
r
e
h
o
u
s
e
 
+
 
f
r
a
u
d
 
c
h
e
c
k
"
,


 
 
}
,


 
 
{


 
 
 
 
w
h
e
n
:
 
"
S
i
n
g
l
e
 
t
r
a
n
s
a
c
t
i
o
n
a
l
 
u
n
i
t
,
 
m
u
s
t
 
b
e
 
a
t
o
m
i
c
"
,


 
 
 
 
p
i
c
k
:
 
"
R
E
S
T
/
R
P
C
"
,


 
 
 
 
e
x
:
 
"
R
e
a
d
 
u
s
e
r
 
b
a
l
a
n
c
e
,
 
w
r
i
t
e
 
t
r
a
n
s
f
e
r
,
 
b
o
t
h
 
m
u
s
t
 
s
u
c
c
e
e
d
 
t
o
g
e
t
h
e
r
"
,


 
 
}
,


 
 
{


 
 
 
 
w
h
e
n
:
 
"
A
u
d
i
t
 
t
r
a
i
l
 
/
 
r
e
p
l
a
y
 
r
e
q
u
i
r
e
d
"
,


 
 
 
 
p
i
c
k
:
 
"
E
D
A
"
,


 
 
 
 
e
x
:
 
"
E
v
e
r
y
 
e
v
e
n
t
 
i
n
 
K
a
f
k
a
 
w
i
t
h
 
r
e
t
e
n
t
i
o
n
.
 
R
e
p
l
a
y
 
a
n
a
l
y
t
i
c
s
 
f
r
o
m
 
a
n
y
 
p
o
i
n
t
 
i
n
 
h
i
s
t
o
r
y
.
"
,


 
 
}
,


 
 
{


 
 
 
 
w
h
e
n
:
 
"
S
y
n
c
h
r
o
n
o
u
s
 
u
s
e
r
-
f
a
c
i
n
g
 
q
u
e
r
y
"
,


 
 
 
 
p
i
c
k
:
 
"
R
E
S
T
/
R
P
C
"
,


 
 
 
 
e
x
:
 
"
S
e
a
r
c
h
 
r
e
s
u
l
t
s
,
 
p
r
o
f
i
l
e
 
l
o
a
d
,
 
a
n
y
t
h
i
n
g
 
w
h
e
r
e
 
t
h
e
 
u
s
e
r
 
i
s
 
w
a
i
t
i
n
g
"
,


 
 
}
,


 
 
{


 
 
 
 
w
h
e
n
:
 
"
A
d
d
i
n
g
 
n
e
w
 
c
o
n
s
u
m
e
r
s
 
w
i
t
h
o
u
t
 
t
o
u
c
h
i
n
g
 
p
r
o
d
u
c
e
r
"
,


 
 
 
 
p
i
c
k
:
 
"
E
D
A
"
,


 
 
 
 
e
x
:
 
"
N
e
w
 
a
n
a
l
y
t
i
c
s
 
d
a
s
h
b
o
a
r
d
 
s
u
b
s
c
r
i
b
e
s
 
t
o
 
e
x
i
s
t
i
n
g
 
e
v
e
n
t
s
.
 
O
r
d
e
r
 
s
e
r
v
i
c
e
 
u
n
a
w
a
r
e
.
"
,


 
 
}
,


 
 
{


 
 
 
 
w
h
e
n
:
 
"
S
t
r
i
c
t
 
o
r
d
e
r
i
n
g
 
o
f
 
c
r
o
s
s
-
s
e
r
v
i
c
e
 
o
p
e
r
a
t
i
o
n
s
"
,


 
 
 
 
p
i
c
k
:
 
"
R
E
S
T
/
R
P
C
 
+
 
s
a
g
a
"
,


 
 
 
 
e
x
:
 
"
W
h
e
n
 
s
e
q
u
e
n
c
e
 
m
a
t
t
e
r
s
 
a
n
d
 
y
o
u
 
c
a
n
'
t
 
t
o
l
e
r
a
t
e
 
e
v
e
n
t
u
a
l
 
c
o
n
s
i
s
t
e
n
c
y
 
f
o
r
 
t
h
a
t
 
f
l
o
w
"
,


 
 
}
,


]
;




f
u
n
c
t
i
o
n
 
W
h
e
n
E
D
A
(
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
h
3
 
s
t
y
l
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
T
i
t
l
e
}
>
W
h
e
n
 
E
D
A
 
a
c
t
u
a
l
l
y
 
w
i
n
s
 
(
a
n
d
 
w
h
e
n
 
i
t
 
d
o
e
s
n
&
r
s
q
u
o
;
t
)
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
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
D
e
s
c
}
>


 
 
 
 
 
 
 
 
E
v
e
n
t
-
d
r
i
v
e
n
 
i
s
 
a
 
s
t
r
o
n
g
 
d
e
f
a
u
l
t
 
f
o
r
 
c
r
o
s
s
-
t
e
a
m
 
i
n
t
e
g
r
a
t
i
o
n
,
 
b
u
t
 
s
y
n
c
h
r
o
n
o
u
s
 
c
a
l
l
s
 
a
r
e


 
 
 
 
 
 
 
 
s
t
i
l
l
 
t
h
e
 
r
i
g
h
t
 
c
a
l
l
 
f
o
r
 
t
i
g
h
t
 
t
r
a
n
s
a
c
t
i
o
n
a
l
 
f
l
o
w
s
 
a
n
d
 
u
s
e
r
-
f
a
c
i
n
g
 
q
u
e
r
i
e
s
.


 
 
 
 
 
 
<
/
p
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
:
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
6
 
}
 
}
 
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


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
R
U
L
E
S
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
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
E
D
A
 
=
 
r
.
p
i
c
k
 
=
=
=
 
"
E
D
A
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
i
s
E
D
A
 
?
 
S
D
 
:
 
N
E
U
T
R
A
L
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
.
w
h
e
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
d
d
e
n
:
 
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
 
8
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
s
i
b
l
e
:
 
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
,
 
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
:
 
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
4
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
y
:
 
-
2
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
4
0
0
,
 
d
a
m
p
i
n
g
:
 
2
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
f
l
e
x
-
s
t
a
r
t
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
s
p
a
c
e
-
b
e
t
w
e
e
n
"
,
 
g
a
p
:
 
1
2
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
4
 
}
}
>
{
r
.
w
h
e
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
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
c
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
p
a
d
d
i
n
g
:
 
"
3
p
x
 
8
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
4
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
c
}
5
5
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
c
}
1
4
`
,
 
w
h
i
t
e
S
p
a
c
e
:
 
"
n
o
w
r
a
p
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
p
i
c
k
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
4
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
4
,
 
c
o
l
o
r
:
 
c
 
}
}
>
E
X
 
·
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>
{
r
.
e
x
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




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
D
_
L
5
_
E
v
e
n
t
D
r
i
v
e
n
A
c
t
i
v
i
t
y
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
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
 
v
o
i
d
 
}
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
E
n
g
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
d
e
f
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
e
f
i
n
i
t
i
o
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
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
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
g
r
a
p
h
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
e
r
v
i
c
e
 
G
r
a
p
h
"
,
 
i
c
o
n
:
 
<
N
e
t
w
o
r
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
,
 
c
o
n
t
e
n
t
:
 
<
S
e
r
v
i
c
e
G
r
a
p
h
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
w
h
e
n
"
,
 
l
a
b
e
l
:
 
"
W
h
e
n
 
t
o
 
U
s
e
"
,
 
i
c
o
n
:
 
<
G
l
o
b
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
W
h
e
n
E
D
A
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
E
n
g
Q
u
i
z
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
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
n
e
w
 
a
n
a
l
y
t
i
c
s
 
t
e
a
m
 
w
a
n
t
s
 
t
o
 
c
o
u
n
t
 
d
a
i
l
y
 
o
r
d
e
r
s
.
 
T
h
e
 
o
r
d
e
r
 
s
e
r
v
i
c
e
 
i
s
 
o
w
n
e
d
 
b
y
 
a
n
o
t
h
e
r
 
t
e
a
m
.
 
W
h
a
t
'
s
 
t
h
e
 
l
i
g
h
t
e
s
t
 
p
a
t
h
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
M
o
d
i
f
y
 
t
h
e
 
o
r
d
e
r
 
s
e
r
v
i
c
e
 
t
o
 
c
a
l
l
 
a
n
a
l
y
t
i
c
s
 
o
n
 
e
v
e
r
y
 
o
r
d
e
r
.
"
,


 
 
 
 
 
 
 
 
"
S
u
b
s
c
r
i
b
e
 
t
o
 
t
h
e
 
e
x
i
s
t
i
n
g
 
O
r
d
e
r
P
l
a
c
e
d
 
e
v
e
n
t
.
 
T
h
e
 
o
r
d
e
r
 
t
e
a
m
 
i
s
n
'
t
 
e
v
e
n
 
a
w
a
r
e
.
"
,


 
 
 
 
 
 
 
 
"
R
e
a
d
 
t
h
e
 
o
r
d
e
r
 
D
B
 
d
i
r
e
c
t
l
y
.
"
,


 
 
 
 
 
 
 
 
"
B
u
i
l
d
 
a
 
C
R
O
N
 
t
h
a
t
 
p
o
l
l
s
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
T
h
e
 
b
i
g
g
e
s
t
 
p
r
a
c
t
i
c
a
l
 
w
i
n
 
o
f
 
E
D
A
:
 
n
e
w
 
c
o
n
s
u
m
e
r
s
 
a
t
t
a
c
h
 
w
i
t
h
o
u
t
 
c
h
a
n
g
i
n
g
 
t
h
e
 
p
u
b
l
i
s
h
e
r
.
 
D
i
r
e
c
t
 
D
B
 
a
c
c
e
s
s
 
c
r
e
a
t
e
s
 
c
o
u
p
l
i
n
g
;
 
p
o
l
l
i
n
g
 
i
s
 
w
a
s
t
e
f
u
l
;
 
e
x
p
l
i
c
i
t
 
c
a
l
l
s
 
r
e
q
u
i
r
e
 
t
h
e
 
p
u
b
l
i
s
h
e
r
'
s
 
t
e
a
m
 
t
o
 
s
h
i
p
 
a
 
c
h
a
n
g
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
O
r
d
e
r
 
p
l
a
c
e
d
 
→
 
r
e
s
e
r
v
e
 
i
n
v
e
n
t
o
r
y
 
→
 
c
h
a
r
g
e
 
c
a
r
d
.
 
T
h
e
 
u
s
e
r
 
i
s
 
w
a
i
t
i
n
g
 
o
n
 
t
h
e
 
r
e
s
p
o
n
s
e
.
 
B
e
s
t
 
f
i
t
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
P
u
r
e
 
E
D
A
 
—
 
e
m
i
t
 
e
v
e
n
t
s
 
a
n
d
 
t
r
u
s
t
 
e
v
e
n
t
u
a
l
 
c
o
n
s
i
s
t
e
n
c
y
.
"
,


 
 
 
 
 
 
 
 
"
S
y
n
c
h
r
o
n
o
u
s
 
R
E
S
T
/
R
P
C
 
c
h
a
i
n
 
(
o
r
 
a
 
s
a
g
a
)
 
s
o
 
t
h
e
 
A
P
I
 
c
a
n
 
r
e
t
u
r
n
 
s
u
c
c
e
s
s
/
f
a
i
l
u
r
e
 
t
o
 
t
h
e
 
u
s
e
r
.
"
,


 
 
 
 
 
 
 
 
"
P
o
l
l
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
E
m
a
i
l
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
E
D
A
 
s
h
i
n
e
s
 
f
o
r
 
f
a
n
-
o
u
t
 
a
n
d
 
a
s
y
n
c
 
f
l
o
w
s
.
 
S
i
n
g
l
e
 
u
s
e
r
-
f
a
c
i
n
g
 
f
l
o
w
s
 
t
h
a
t
 
m
u
s
t
 
c
o
m
p
l
e
t
e
 
b
e
f
o
r
e
 
r
e
s
p
o
n
d
i
n
g
 
t
o
 
t
h
e
 
r
e
q
u
e
s
t
 
a
r
e
 
c
l
e
a
r
e
r
 
w
i
t
h
 
s
y
n
c
h
r
o
n
o
u
s
 
c
a
l
l
s
 
o
r
 
a
 
s
a
g
a
 
t
h
a
t
 
t
h
e
 
A
P
I
 
a
w
a
i
t
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
i
s
 
h
a
r
d
e
s
t
 
t
o
 
d
e
b
u
g
 
i
n
 
a
n
 
E
D
A
 
s
y
s
t
e
m
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
A
d
d
i
n
g
 
a
 
n
e
w
 
c
o
n
s
u
m
e
r
.
"
,


 
 
 
 
 
 
 
 
"
T
r
a
c
i
n
g
 
a
 
s
i
n
g
l
e
 
b
u
s
i
n
e
s
s
 
o
u
t
c
o
m
e
 
a
c
r
o
s
s
 
a
 
c
h
a
i
n
 
o
f
 
a
s
y
n
c
h
r
o
n
o
u
s
 
e
v
e
n
t
s
.
"
,


 
 
 
 
 
 
 
 
"
S
t
o
r
a
g
e
 
c
a
p
a
c
i
t
y
.
"
,


 
 
 
 
 
 
 
 
"
L
o
c
a
l
 
d
e
v
e
l
o
p
m
e
n
t
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
D
i
s
t
r
i
b
u
t
e
d
 
t
r
a
c
i
n
g
,
 
c
o
r
r
e
l
a
t
i
o
n
 
I
D
s
,
 
a
n
d
 
g
o
o
d
 
e
v
e
n
t
 
s
c
h
e
m
a
s
 
h
e
l
p
,
 
b
u
t
 
t
h
e
 
i
n
h
e
r
e
n
t
 
c
h
a
l
l
e
n
g
e
 
o
f
 
E
D
A
 
i
s
 
f
o
l
l
o
w
i
n
g
 
o
n
e
 
l
o
g
i
c
a
l
 
f
l
o
w
 
a
c
r
o
s
s
 
m
a
n
y
 
s
e
r
v
i
c
e
s
 
a
n
d
 
e
v
e
n
t
 
h
o
p
s
.
 
S
y
n
c
h
r
o
n
o
u
s
 
c
h
a
i
n
s
 
a
r
e
 
e
a
s
i
e
r
 
t
o
 
t
r
a
c
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
y
 
s
h
o
u
l
d
 
e
v
e
n
t
s
 
n
a
m
e
 
a
 
f
a
c
t
 
i
n
 
t
h
e
 
p
a
s
t
 
t
e
n
s
e
 
(
e
.
g
.
,
 
'
O
r
d
e
r
P
l
a
c
e
d
'
)
 
r
a
t
h
e
r
 
t
h
a
n
 
a
 
c
o
m
m
a
n
d
 
(
'
P
l
a
c
e
O
r
d
e
r
'
)
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
I
t
 
l
o
o
k
s
 
n
i
c
e
r
.
"
,


 
 
 
 
 
 
 
 
"
E
v
e
n
t
s
 
r
e
p
r
e
s
e
n
t
 
s
o
m
e
t
h
i
n
g
 
t
h
a
t
 
a
l
r
e
a
d
y
 
h
a
p
p
e
n
e
d
.
 
C
o
m
m
a
n
d
s
 
i
m
p
l
i
c
i
t
l
y
 
c
o
u
p
l
e
 
p
r
o
d
u
c
e
r
 
t
o
 
a
 
s
p
e
c
i
f
i
c
 
c
o
n
s
u
m
e
r
 
t
h
a
t
 
s
h
o
u
l
d
 
e
x
e
c
u
t
e
 
t
h
e
 
c
o
m
m
a
n
d
.
"
,


 
 
 
 
 
 
 
 
"
I
t
'
s
 
r
e
q
u
i
r
e
d
 
b
y
 
K
a
f
k
a
.
"
,


 
 
 
 
 
 
 
 
"
P
a
s
t
 
t
e
n
s
e
 
i
s
 
f
a
s
t
e
r
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
P
a
s
t
-
t
e
n
s
e
 
e
v
e
n
t
s
 
a
r
e
 
s
t
a
b
l
e
 
f
a
c
t
s
.
 
A
n
y
o
n
e
 
c
a
n
 
s
u
b
s
c
r
i
b
e
 
a
n
d
 
r
e
a
c
t
.
 
C
o
m
m
a
n
d
s
 
(
'
d
o
 
t
h
i
s
'
)
 
i
m
p
l
y
 
a
 
s
p
e
c
i
f
i
c
 
r
e
s
p
o
n
d
e
r
,
 
w
h
i
c
h
 
l
e
a
k
s
 
c
o
u
p
l
i
n
g
 
b
a
c
k
 
i
n
t
o
 
t
h
e
 
p
u
b
l
i
s
h
e
r
'
s
 
m
e
n
t
a
l
 
m
o
d
e
l
.
"
,


 
 
 
 
}
,


 
 
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
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
E
v
e
n
t
-
D
r
i
v
e
n
 
A
r
c
h
i
t
e
c
t
u
r
e
"


 
 
 
 
 
 
l
e
v
e
l
=
{
5
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
3
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
T
h
e
 
a
r
c
h
i
t
e
c
t
u
r
a
l
 
p
a
t
t
e
r
n
 
b
e
h
i
n
d
 
e
v
e
r
y
 
m
o
d
e
r
n
 
m
i
c
r
o
s
e
r
v
i
c
e
s
 
d
e
s
i
g
n
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}




