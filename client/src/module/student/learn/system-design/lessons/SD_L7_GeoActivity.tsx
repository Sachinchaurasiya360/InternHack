
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
 
M
a
p
P
i
n
 
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
 
W
A
R
N
 
=
 
"
#
f
5
9
e
0
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
T
u
r
n
i
n
g
 
&
l
d
q
u
o
;
n
e
a
r
b
y
&
r
d
q
u
o
;
 
i
n
t
o
 
a
 
B
-
t
r
e
e
 
l
o
o
k
u
p
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


 
 
 
 
 
 
 
 
2
D
 
c
o
o
r
d
i
n
a
t
e
s
 
c
a
n
&
r
s
q
u
o
;
t
 
b
e
 
i
n
d
e
x
e
d
 
d
i
r
e
c
t
l
y
 
w
i
t
h
 
a
 
B
-
t
r
e
e
.
 
G
e
o
 
i
n
d
e
x
e
s
 
s
o
l
v
e
 
t
h
i
s
 
b
y


 
 
 
 
 
 
 
 
e
n
c
o
d
i
n
g
 
(
l
a
t
,
 
l
n
g
)
 
i
n
t
o
 
a
 
1
D
 
s
t
r
i
n
g
 
(
<
b
>
g
e
o
h
a
s
h
<
/
b
>
)
 
o
r
 
a
 
h
i
e
r
a
r
c
h
i
c
a
l
 
g
r
i
d
 
(
<
b
>
q
u
a
d
t
r
e
e
<
/
b
>
)
.


 
 
 
 
 
 
 
 
N
o
w
 
&
l
d
q
u
o
;
f
i
n
d
 
n
e
a
r
b
y
&
r
d
q
u
o
;
 
b
e
c
o
m
e
s
 
a
 
p
r
e
f
i
x
 
s
c
a
n
 
o
r
 
a
 
t
r
e
e
 
w
a
l
k
 
—
 
b
o
t
h
 
b
a
c
k
e
d
 
b
y
 
i
n
d
e
x
e
s
 
y
o
u


 
 
 
 
 
 
 
 
a
l
r
e
a
d
y
 
h
a
v
e
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
G
e
o
h
a
s
h
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
:
 
"
s
t
r
i
n
g
 
p
r
e
f
i
x
 
i
n
d
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
h
o
w
:
 
"
I
n
t
e
r
l
e
a
v
e
 
l
a
t
 
&
 
l
n
g
 
b
i
t
s
 
→
 
e
n
c
o
d
e
 
a
s
 
b
a
s
e
-
3
2
 
s
t
r
i
n
g
.
 
N
e
a
r
b
y
 
p
o
i
n
t
s
 
s
h
a
r
e
 
l
o
n
g
 
p
r
e
f
i
x
e
s
.
 
'
t
d
r
1
y
'
 
i
s
 
o
n
e
 
n
e
i
g
h
b
o
r
h
o
o
d
;
 
'
t
d
r
1
z
'
 
i
s
 
r
i
g
h
t
 
n
e
x
t
 
d
o
o
r
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
e
x
:
 
"
R
e
d
i
s
 
G
E
O
 
c
o
m
m
a
n
d
s
,
 
P
o
s
t
g
r
e
s
 
+
 
G
i
S
T
 
e
x
t
e
n
s
i
o
n
s
,
 
M
o
n
g
o
D
B
 
2
d
s
p
h
e
r
e
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
Q
u
a
d
t
r
e
e
"
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


 
 
 
 
 
 
 
 
 
 
 
 
t
a
g
:
 
"
r
e
c
u
r
s
i
v
e
 
s
u
b
d
i
v
i
s
i
o
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
h
o
w
:
 
"
R
e
c
u
r
s
i
v
e
l
y
 
s
p
l
i
t
 
a
 
r
e
g
i
o
n
 
i
n
t
o
 
4
 
q
u
a
d
r
a
n
t
s
 
u
n
t
i
l
 
e
a
c
h
 
h
o
l
d
s
 
a
t
 
m
o
s
t
 
K
 
p
o
i
n
t
s
.
 
F
i
n
d
-
n
e
a
r
b
y
 
=
 
w
a
l
k
 
d
o
w
n
 
t
o
 
t
h
e
 
r
i
g
h
t
 
q
u
a
d
r
a
n
t
,
 
s
c
a
n
 
i
t
s
 
p
o
i
n
t
s
 
+
 
n
e
i
g
h
b
o
r
s
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
e
x
:
 
"
U
b
e
r
'
s
 
H
3
 
(
a
 
h
e
x
 
v
a
r
i
a
n
t
)
,
 
G
o
o
g
l
e
 
S
2
,
 
O
p
e
n
S
t
r
e
e
t
M
a
p
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
6
p
x
 
1
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
t
a
g
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
6
 
}
}
>
{
p
.
h
o
w
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
T
o
p
:
 
8
,
 
b
o
r
d
e
r
T
o
p
:
 
`
1
p
x
 
d
a
s
h
e
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
3
3
`
,
 
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
 
p
.
c
o
l
o
r
 
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
p
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
 
b
u
i
l
t
 
H
3
 
(
h
e
x
a
g
o
n
a
l
 
g
r
i
d
)
.
 
<
b
>
S
w
i
g
g
y
 
/
 
Z
o
m
a
t
o
<
/
b
>
 
u
s
e
 
g
e
o
h
a
s
h
 
f
o
r
 
d
e
l
i
v
e
r
y


 
 
 
 
 
 
 
 
 
 
z
o
n
e
s
.
 
<
b
>
G
o
o
g
l
e
 
M
a
p
s
 
/
 
S
p
a
n
n
e
r
<
/
b
>
 
u
s
e
 
S
2
.
 
<
b
>
T
i
n
d
e
r
<
/
b
>
 
&
l
d
q
u
o
;
n
e
a
r
b
y
&
r
d
q
u
o
;
 
i
s
 
g
e
o
h
a
s
h
 
o
n


 
 
 
 
 
 
 
 
 
 
R
e
d
i
s
.
 
W
h
e
n
e
v
e
r
 
y
o
u
 
s
e
e
 
a
 
&
l
d
q
u
o
;
w
i
t
h
i
n
 
5
 
k
m
&
r
d
q
u
o
;
 
q
u
e
r
y
 
a
t
 
s
c
a
l
e
,
 
o
n
e
 
o
f
 
t
h
e
s
e
 
i
s
 
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
 
M
a
p
 
w
i
t
h
 
d
r
a
g
g
a
b
l
e
 
p
i
n
 
+
 
r
a
d
i
u
s
 
s
e
a
r
c
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




c
o
n
s
t
 
M
A
P
_
W
 
=
 
6
0
0
;


c
o
n
s
t
 
M
A
P
_
H
 
=
 
3
6
0
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
O
I
 
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


}




c
o
n
s
t
 
P
O
I
S
:
 
P
O
I
[
]
 
=
 
[


 
 
{
 
i
d
:
 
1
,
 
l
a
b
e
l
:
 
"
C
a
f
e
 
M
o
c
h
a
"
,
 
x
:
 
1
8
0
,
 
y
:
 
1
3
0
 
}
,


 
 
{
 
i
d
:
 
2
,
 
l
a
b
e
l
:
 
"
B
o
m
b
a
y
 
B
i
s
t
r
o
"
,
 
x
:
 
2
2
0
,
 
y
:
 
2
0
0
 
}
,


 
 
{
 
i
d
:
 
3
,
 
l
a
b
e
l
:
 
"
P
u
n
e
 
T
i
f
f
i
n
"
,
 
x
:
 
3
2
0
,
 
y
:
 
1
1
0
 
}
,


 
 
{
 
i
d
:
 
4
,
 
l
a
b
e
l
:
 
"
S
p
i
c
e
 
B
o
x
"
,
 
x
:
 
3
8
0
,
 
y
:
 
2
3
0
 
}
,


 
 
{
 
i
d
:
 
5
,
 
l
a
b
e
l
:
 
"
C
h
a
i
 
P
o
i
n
t
"
,
 
x
:
 
4
6
0
,
 
y
:
 
1
5
0
 
}
,


 
 
{
 
i
d
:
 
6
,
 
l
a
b
e
l
:
 
"
F
i
l
t
e
r
 
C
o
f
f
e
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
9
0
 
}
,


 
 
{
 
i
d
:
 
7
,
 
l
a
b
e
l
:
 
"
S
o
u
t
h
 
I
n
d
i
a
n
"
,
 
x
:
 
1
3
0
,
 
y
:
 
2
5
0
 
}
,


 
 
{
 
i
d
:
 
8
,
 
l
a
b
e
l
:
 
"
N
o
r
t
h
 
B
i
t
e
s
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
9
0
 
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
 
G
e
o
D
e
m
o
(
)
 
{


 
 
c
o
n
s
t
 
[
p
i
n
,
 
s
e
t
P
i
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
{
 
x
:
 
2
8
0
,
 
y
:
 
2
0
0
 
}
)
;


 
 
c
o
n
s
t
 
[
r
a
d
i
u
s
,
 
s
e
t
R
a
d
i
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
1
2
0
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
c
i
s
i
o
n
,
 
s
e
t
P
r
e
c
i
s
i
o
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
3
)
;
 
/
/
 
g
r
i
d
 
p
r
e
c
i
s
i
o
n
:
 
1
 
→
 
8
x
8
,
 
2
 
→
 
1
6
x
1
6
,
 
3
 
→
 
3
2
x
3
2




 
 
c
o
n
s
t
 
c
e
l
l
s
P
e
r
S
i
d
e
 
=
 
M
a
t
h
.
p
o
w
(
2
,
 
p
r
e
c
i
s
i
o
n
 
+
 
2
)
;
 
/
/
 
8
,
 
1
6
,
 
3
2
,
 
6
4


 
 
c
o
n
s
t
 
c
e
l
l
W
 
=
 
M
A
P
_
W
 
/
 
c
e
l
l
s
P
e
r
S
i
d
e
;


 
 
c
o
n
s
t
 
c
e
l
l
H
 
=
 
M
A
P
_
H
 
/
 
c
e
l
l
s
P
e
r
S
i
d
e
;


 
 
c
o
n
s
t
 
p
i
n
C
e
l
l
X
 
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
p
i
n
.
x
 
/
 
c
e
l
l
W
)
;


 
 
c
o
n
s
t
 
p
i
n
C
e
l
l
Y
 
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
p
i
n
.
y
 
/
 
c
e
l
l
H
)
;




 
 
/
/
 
F
i
n
d
 
c
e
l
l
s
 
w
i
t
h
i
n
 
s
e
a
r
c
h
 
r
a
d
i
u
s
 
(
t
h
e
 
"
g
e
o
h
a
s
h
 
n
e
i
g
h
b
o
r
s
"
 
a
p
p
r
o
x
i
m
a
t
i
o
n
)


 
 
c
o
n
s
t
 
s
e
a
r
c
h
C
e
l
l
s
 
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


 
 
 
 
c
o
n
s
t
 
c
e
l
l
s
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;


 
 
 
 
/
/
 
b
o
u
n
d
i
n
g
 
b
o
x
 
o
f
 
c
e
l
l
s
 
c
o
v
e
r
i
n
g
 
t
h
e
 
r
a
d
i
u
s


 
 
 
 
c
o
n
s
t
 
m
i
n
X
 
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
(
p
i
n
.
x
 
-
 
r
a
d
i
u
s
)
 
/
 
c
e
l
l
W
)
;


 
 
 
 
c
o
n
s
t
 
m
a
x
X
 
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
(
p
i
n
.
x
 
+
 
r
a
d
i
u
s
)
 
/
 
c
e
l
l
W
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
Y
 
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
(
p
i
n
.
y
 
-
 
r
a
d
i
u
s
)
 
/
 
c
e
l
l
H
)
;


 
 
 
 
c
o
n
s
t
 
m
a
x
Y
 
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
(
p
i
n
.
y
 
+
 
r
a
d
i
u
s
)
 
/
 
c
e
l
l
H
)
;


 
 
 
 
f
o
r
 
(
l
e
t
 
c
x
 
=
 
m
i
n
X
;
 
c
x
 
<
=
 
m
a
x
X
;
 
c
x
+
+
)
 
{


 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
c
y
 
=
 
m
i
n
Y
;
 
c
y
 
<
=
 
m
a
x
Y
;
 
c
y
+
+
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
c
x
 
>
=
 
0
 
&
&
 
c
x
 
<
 
c
e
l
l
s
P
e
r
S
i
d
e
 
&
&
 
c
y
 
>
=
 
0
 
&
&
 
c
y
 
<
 
c
e
l
l
s
P
e
r
S
i
d
e
)
 
{


 
 
 
 
 
 
 
 
 
 
c
e
l
l
s
.
a
d
d
(
`
$
{
c
x
}
,
$
{
c
y
}
`
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
c
e
l
l
s
;


 
 
}
,
 
[
p
i
n
,
 
r
a
d
i
u
s
,
 
c
e
l
l
W
,
 
c
e
l
l
H
,
 
c
e
l
l
s
P
e
r
S
i
d
e
]
)
;




 
 
c
o
n
s
t
 
n
e
a
r
b
y
 
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


 
 
 
 
r
e
t
u
r
n
 
P
O
I
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
p
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
x
 
=
 
p
.
x
 
-
 
p
i
n
.
x
;


 
 
 
 
 
 
c
o
n
s
t
 
d
y
 
=
 
p
.
y
 
-
 
p
i
n
.
y
;


 
 
 
 
 
 
r
e
t
u
r
n
 
M
a
t
h
.
s
q
r
t
(
d
x
 
*
 
d
x
 
+
 
d
y
 
*
 
d
y
)
 
<
=
 
r
a
d
i
u
s
;


 
 
 
 
}
)
;


 
 
}
,
 
[
p
i
n
,
 
r
a
d
i
u
s
]
)
;




 
 
c
o
n
s
t
 
p
i
n
H
a
s
h
 
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


 
 
 
 
/
/
 
S
i
m
u
l
a
t
e
d
 
g
e
o
h
a
s
h
:
 
e
n
c
o
d
e
 
c
e
l
l
 
c
o
o
r
d
s
 
a
t
 
t
h
e
 
c
h
o
s
e
n
 
p
r
e
c
i
s
i
o
n
 
a
s
 
b
a
s
e
3
2
 
c
h
a
r
(
s
)


 
 
 
 
c
o
n
s
t
 
x
B
i
n
 
=
 
p
i
n
C
e
l
l
X
.
t
o
S
t
r
i
n
g
(
2
)
.
p
a
d
S
t
a
r
t
(
p
r
e
c
i
s
i
o
n
 
+
 
2
,
 
"
0
"
)
;


 
 
 
 
c
o
n
s
t
 
y
B
i
n
 
=
 
p
i
n
C
e
l
l
Y
.
t
o
S
t
r
i
n
g
(
2
)
.
p
a
d
S
t
a
r
t
(
p
r
e
c
i
s
i
o
n
 
+
 
2
,
 
"
0
"
)
;


 
 
 
 
l
e
t
 
i
n
t
e
r
l
e
a
v
e
d
 
=
 
"
"
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
x
B
i
n
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
 
 
i
n
t
e
r
l
e
a
v
e
d
 
+
=
 
x
B
i
n
[
i
]
 
+
 
y
B
i
n
[
i
]
;


 
 
 
 
}


 
 
 
 
/
/
 
C
o
n
v
e
r
t
 
e
a
c
h
 
5
 
b
i
t
s
 
t
o
 
b
a
s
e
-
3
2
-
i
s
h
 
c
h
a
r
a
c
t
e
r


 
 
 
 
c
o
n
s
t
 
c
h
a
r
s
 
=
 
"
0
1
2
3
4
5
6
7
8
9
b
c
d
e
f
g
h
j
k
m
n
p
q
r
s
t
u
v
w
x
y
z
"
;


 
 
 
 
l
e
t
 
o
u
t
 
=
 
"
"
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
i
n
t
e
r
l
e
a
v
e
d
.
l
e
n
g
t
h
;
 
i
 
+
=
 
5
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
c
h
u
n
k
 
=
 
i
n
t
e
r
l
e
a
v
e
d
.
s
l
i
c
e
(
i
,
 
i
 
+
 
5
)
.
p
a
d
E
n
d
(
5
,
 
"
0
"
)
;


 
 
 
 
 
 
o
u
t
 
+
=
 
c
h
a
r
s
[
p
a
r
s
e
I
n
t
(
c
h
u
n
k
,
 
2
)
]
 
?
?
 
"
"
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
o
u
t
 
|
|
 
"
0
"
;


 
 
}
,
 
[
p
i
n
C
e
l
l
X
,
 
p
i
n
C
e
l
l
Y
,
 
p
r
e
c
i
s
i
o
n
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
M
a
p
C
l
i
c
k
 
=
 
(
e
:
 
R
e
a
c
t
.
M
o
u
s
e
E
v
e
n
t
<
S
V
G
S
V
G
E
l
e
m
e
n
t
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
 
r
e
c
t
 
=
 
(
e
.
c
u
r
r
e
n
t
T
a
r
g
e
t
 
a
s
 
S
V
G
S
V
G
E
l
e
m
e
n
t
)
.
g
e
t
B
o
u
n
d
i
n
g
C
l
i
e
n
t
R
e
c
t
(
)
;


 
 
 
 
c
o
n
s
t
 
x
 
=
 
(
(
e
.
c
l
i
e
n
t
X
 
-
 
r
e
c
t
.
l
e
f
t
)
 
/
 
r
e
c
t
.
w
i
d
t
h
)
 
*
 
M
A
P
_
W
;


 
 
 
 
c
o
n
s
t
 
y
 
=
 
(
(
e
.
c
l
i
e
n
t
Y
 
-
 
r
e
c
t
.
t
o
p
)
 
/
 
r
e
c
t
.
h
e
i
g
h
t
)
 
*
 
M
A
P
_
H
;


 
 
 
 
s
e
t
P
i
n
(
{
 
x
,
 
y
 
}
)
;


 
 
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
w
h
e
r
e
 
t
o
 
d
r
o
p
 
a
 
p
i
n
.
 
S
l
i
d
e
 
t
h
e
 
r
a
d
i
u
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


 
 
 
 
 
 
 
 
T
h
e
 
p
i
n
&
r
s
q
u
o
;
s
 
g
e
o
h
a
s
h
 
i
s
 
c
o
m
p
u
t
e
d
 
a
t
 
t
h
e
 
c
h
o
s
e
n
 
p
r
e
c
i
s
i
o
n
.
 
T
h
e
 
s
e
a
r
c
h
 
r
a
d
i
u
s
 
i
s
 
c
o
n
v
e
r
t
e
d


 
 
 
 
 
 
 
 
t
o
 
a
 
b
o
u
n
d
i
n
g
 
b
o
x
 
o
f
 
c
e
l
l
s
.
 
T
h
e
 
D
B
 
s
c
a
n
s
 
o
n
l
y
 
t
h
o
s
e
 
c
e
l
l
s
,
 
t
h
e
n
 
f
i
l
t
e
r
s
 
b
y
 
e
x
a
c
t
 
d
i
s
t
a
n
c
e
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
4
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
<
S
l
i
d
e
r
 
l
a
b
e
l
=
"
s
e
a
r
c
h
 
r
a
d
i
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
r
a
d
i
u
s
}
 
s
e
t
V
a
l
u
e
=
{
s
e
t
R
a
d
i
u
s
}
 
m
i
n
=
{
4
0
}
 
m
a
x
=
{
2
4
0
}
 
s
t
e
p
=
{
1
0
}
 
s
u
f
f
i
x
=
"
p
x
"
 
/
>


 
 
 
 
 
 
 
 
<
S
l
i
d
e
r
 
l
a
b
e
l
=
"
g
e
o
h
a
s
h
 
p
r
e
c
i
s
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
p
r
e
c
i
s
i
o
n
}
 
s
e
t
V
a
l
u
e
=
{
s
e
t
P
r
e
c
i
s
i
o
n
}
 
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
}
 
s
t
e
p
=
{
1
}
 
s
u
f
f
i
x
=
{
`
=
 
$
{
c
e
l
l
s
P
e
r
S
i
d
e
}
×
$
{
c
e
l
l
s
P
e
r
S
i
d
e
}
 
g
r
i
d
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
 
1
8
 
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
{
`
0
 
0
 
$
{
M
A
P
_
W
}
 
$
{
M
A
P
_
H
}
`
}


 
 
 
 
 
 
 
 
 
 
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
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
,
 
c
u
r
s
o
r
:
 
"
c
r
o
s
s
h
a
i
r
"
 
}
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
h
a
n
d
l
e
M
a
p
C
l
i
c
k
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
g
r
i
d
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
c
e
l
l
s
P
e
r
S
i
d
e
 
+
 
1
 
}
)
.
m
a
p
(
(
_
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
g
x
$
{
i
}
`
}
 
x
1
=
{
i
 
*
 
c
e
l
l
W
}
 
x
2
=
{
i
 
*
 
c
e
l
l
W
}
 
y
1
=
{
0
}
 
y
2
=
{
M
A
P
_
H
}
 
s
t
r
o
k
e
=
"
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
0
8
)
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
1
}
 
/
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
c
e
l
l
s
P
e
r
S
i
d
e
 
+
 
1
 
}
)
.
m
a
p
(
(
_
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
g
y
$
{
i
}
`
}
 
x
1
=
{
0
}
 
x
2
=
{
M
A
P
_
W
}
 
y
1
=
{
i
 
*
 
c
e
l
l
H
}
 
y
2
=
{
i
 
*
 
c
e
l
l
H
}
 
s
t
r
o
k
e
=
"
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
0
8
)
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
 
c
e
l
l
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
s
e
a
r
c
h
C
e
l
l
s
)
.
m
a
p
(
(
k
e
y
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
[
c
x
,
 
c
y
]
 
=
 
k
e
y
.
s
p
l
i
t
(
"
,
"
)
.
m
a
p
(
N
u
m
b
e
r
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
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
k
e
y
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
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
c
x
 
*
 
c
e
l
l
W
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
c
y
 
*
 
c
e
l
l
H
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
c
e
l
l
W
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
c
e
l
l
H
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
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
0
8
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
3
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
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
p
i
n
'
s
 
c
e
l
l
 
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
 
b
r
i
g
h
t
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
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
 
x
:
 
p
i
n
C
e
l
l
X
 
*
 
c
e
l
l
W
,
 
y
:
 
p
i
n
C
e
l
l
Y
 
*
 
c
e
l
l
H
,
 
w
i
d
t
h
:
 
c
e
l
l
W
,
 
h
e
i
g
h
t
:
 
c
e
l
l
H
 
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
 
3
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
 
3
0
 
}
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


 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
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
2
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
2
}


 
 
 
 
 
 
 
 
 
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
r
a
d
i
u
s
 
c
i
r
c
l
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
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
 
p
i
n
.
x
,
 
c
y
:
 
p
i
n
.
y
,
 
r
:
 
r
a
d
i
u
s
 
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
 
2
8
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
 
3
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
6
 
4
"


 
 
 
 
 
 
 
 
 
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
O
I
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
P
O
I
S
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
x
 
=
 
p
.
x
 
-
 
p
i
n
.
x
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
y
 
=
 
p
.
y
 
-
 
p
i
n
.
y
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
i
s
t
 
=
 
M
a
t
h
.
s
q
r
t
(
d
x
 
*
 
d
x
 
+
 
d
y
 
*
 
d
y
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
n
s
i
d
e
 
=
 
d
i
s
t
 
<
=
 
r
a
d
i
u
s
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
i
n
s
i
d
e
 
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
g
 
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
 
i
n
s
i
d
e
 
?
 
1
 
:
 
0
.
4
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
p
.
x
}
 
c
y
=
{
p
.
y
}
 
r
=
{
5
}
 
f
i
l
l
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
=
"
#
0
b
1
2
2
0
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
p
.
x
 
+
 
8
}
 
y
=
{
p
.
y
 
+
 
4
}
 
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
1
0
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
p
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
 
p
i
n
 
m
a
r
k
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
g
 
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
 
x
:
 
p
i
n
.
x
,
 
y
:
 
p
i
n
.
y
 
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
 
3
2
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
8
 
}
}
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
r
a
d
i
u
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
x
=
{
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
0
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
0
5
,
 
s
c
a
l
e
:
 
0
.
9
5
 
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
.
1
5
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
 
r
e
p
e
a
t
T
y
p
e
:
 
"
r
e
v
e
r
s
e
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
0
}
 
c
y
=
{
0
}
 
r
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
W
A
R
N
}
 
s
t
r
o
k
e
=
"
#
0
b
1
2
2
0
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
0
}
 
c
y
=
{
0
}
 
r
=
{
3
}
 
f
i
l
l
=
"
#
0
b
1
2
2
0
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


 
 
 
 
 
 
 
 
<
/
s
v
g
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
3
 
g
a
p
-
2
 
m
t
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
p
i
n
 
g
e
o
h
a
s
h
"
 
v
a
l
u
e
=
{
p
i
n
H
a
s
h
}
 
c
o
l
o
r
=
{
W
A
R
N
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
c
e
l
l
s
 
s
c
a
n
n
e
d
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
s
e
a
r
c
h
C
e
l
l
s
.
s
i
z
e
)
}
 
c
o
l
o
r
=
{
S
D
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
P
O
I
s
 
i
n
 
r
a
d
i
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
`
$
{
n
e
a
r
b
y
.
l
e
n
g
t
h
}
 
/
 
$
{
P
O
I
S
.
l
e
n
g
t
h
}
`
}
 
c
o
l
o
r
=
{
S
D
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
 
m
a
r
g
i
n
T
o
p
:
 
1
4
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
1
2
p
x
 
1
4
p
x
"
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
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
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
 
6
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
#
e
5
e
7
e
b
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
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
H
O
W
 
T
H
E
 
Q
U
E
R
Y
 
W
O
R
K
S


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
1
.
 
C
o
m
p
u
t
e
 
p
i
n
&
r
s
q
u
o
;
s
 
g
e
o
h
a
s
h
 
→
 
<
c
o
d
e
 
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
 
W
A
R
N
,
 
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
 
}
}
>
{
p
i
n
H
a
s
h
}
<
/
c
o
d
e
>
.


 
 
 
 
 
 
 
 
 
 
2
.
 
C
o
m
p
u
t
e
 
n
e
i
g
h
b
o
r
i
n
g
 
c
e
l
l
s
 
c
o
v
e
r
i
n
g
 
t
h
e
 
s
e
a
r
c
h
 
r
a
d
i
u
s
.
 
3
.
 
D
B
 
d
o
e
s
 
a
 
p
r
e
f
i
x
 
s
c
a
n
 
o
n


 
 
 
 
 
 
 
 
 
 
t
h
o
s
e
 
g
e
o
h
a
s
h
e
s
 
a
n
d
 
r
e
t
u
r
n
s
 
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
.
 
4
.
 
A
p
p
 
f
i
l
t
e
r
s
 
b
y
 
e
x
a
c
t
 
g
r
e
a
t
-
c
i
r
c
l
e
 
d
i
s
t
a
n
c
e
.


 
 
 
 
 
 
 
 
 
 
T
w
o
 
c
h
e
a
p
 
o
p
s
,
 
n
o
 
f
u
l
l
-
t
a
b
l
e
 
s
c
a
n
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




f
u
n
c
t
i
o
n
 
S
l
i
d
e
r
(
{
 
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
,
 
s
e
t
V
a
l
u
e
,
 
m
i
n
,
 
m
a
x
,
 
s
t
e
p
,
 
s
u
f
f
i
x
 
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
 
s
e
t
V
a
l
u
e
:
 
(
v
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
;
 
m
i
n
:
 
n
u
m
b
e
r
;
 
m
a
x
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
e
p
:
 
n
u
m
b
e
r
;
 
s
u
f
f
i
x
?
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
 
}
}
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
 
}
}
>
=
 
{
v
a
l
u
e
}
 
{
s
u
f
f
i
x
 
?
?
 
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
r
a
n
g
e
"
 
m
i
n
=
{
m
i
n
}
 
m
a
x
=
{
m
a
x
}
 
s
t
e
p
=
{
s
t
e
p
}
 
v
a
l
u
e
=
{
v
a
l
u
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
V
a
l
u
e
(
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
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
"
1
0
0
%
"
,
 
a
c
c
e
n
t
C
o
l
o
r
:
 
S
D
 
}
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
(
{
 
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
,
 
c
o
l
o
r
 
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
0
p
x
 
1
2
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
o
l
o
r
}
1
0
`
,
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
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
 
c
o
l
o
r
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
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
 
}
}
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
9
5
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
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,
 
t
e
x
t
O
v
e
r
f
l
o
w
:
 
"
e
l
l
i
p
s
i
s
"
 
}
}
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
 
R
e
a
l
 
g
e
o
 
s
y
s
t
e
m
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
S
Y
S
T
E
M
S
 
=
 
[


 
 
{
 
n
a
m
e
:
 
"
U
b
e
r
 
d
i
s
p
a
t
c
h
"
,
 
u
s
e
s
:
 
"
H
3
 
(
h
e
x
a
g
o
n
s
)
"
,
 
w
h
y
:
 
"
H
e
x
 
c
e
l
l
s
 
h
a
v
e
 
u
n
i
f
o
r
m
 
n
e
i
g
h
b
o
r
 
d
i
s
t
a
n
c
e
 
—
 
i
m
p
o
r
t
a
n
t
 
f
o
r
 
a
c
c
u
r
a
t
e
 
E
T
A
 
e
s
t
i
m
a
t
e
s
 
a
n
d
 
f
a
i
r
 
s
u
r
g
e
 
z
o
n
e
s
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
S
w
i
g
g
y
 
d
e
l
i
v
e
r
y
 
z
o
n
e
s
"
,
 
u
s
e
s
:
 
"
G
e
o
h
a
s
h
 
o
n
 
R
e
d
i
s
"
,
 
w
h
y
:
 
"
P
r
e
-
w
a
r
m
e
d
 
b
y
 
c
i
t
y
.
 
R
e
s
t
a
u
r
a
n
t
s
 
a
n
d
 
c
u
s
t
o
m
e
r
s
 
m
a
p
 
t
o
 
a
 
g
e
o
h
a
s
h
;
 
l
o
o
k
u
p
 
i
s
 
a
 
s
i
n
g
l
e
 
R
e
d
i
s
 
Z
R
A
N
G
E
B
Y
S
C
O
R
E
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
T
i
n
d
e
r
 
n
e
a
r
b
y
"
,
 
u
s
e
s
:
 
"
G
e
o
h
a
s
h
 
+
 
P
o
s
t
g
r
e
s
 
G
i
S
T
"
,
 
w
h
y
:
 
"
C
h
e
a
p
 
t
o
 
q
u
e
r
y
,
 
i
n
d
e
x
e
s
 
w
e
l
l
,
 
d
o
e
s
n
'
t
 
n
e
e
d
 
e
x
a
c
t
 
d
i
s
t
a
n
c
e
 
u
n
t
i
l
 
t
h
e
 
f
i
n
a
l
 
s
t
e
p
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
G
o
o
g
l
e
 
M
a
p
s
 
/
 
S
p
a
n
n
e
r
"
,
 
u
s
e
s
:
 
"
S
2
 
(
c
e
l
l
 
I
D
s
)
"
,
 
w
h
y
:
 
"
H
i
e
r
a
r
c
h
i
c
a
l
 
c
u
r
v
e
 
c
o
v
e
r
s
 
s
p
h
e
r
e
s
 
u
n
i
f
o
r
m
l
y
.
 
U
s
e
d
 
b
y
 
M
a
p
s
,
 
E
a
r
t
h
,
 
P
o
k
e
m
o
n
 
G
o
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
P
o
s
t
g
r
e
s
 
+
 
P
o
s
t
G
I
S
"
,
 
u
s
e
s
:
 
"
R
-
t
r
e
e
 
o
n
 
g
e
o
m
e
t
r
i
e
s
"
,
 
w
h
y
:
 
"
W
h
e
n
 
y
o
u
 
n
e
e
d
 
p
o
l
y
g
o
n
 
c
o
n
t
a
i
n
m
e
n
t
,
 
i
n
t
e
r
s
e
c
t
i
o
n
,
 
a
n
d
 
a
r
b
i
t
r
a
r
y
 
s
h
a
p
e
s
 
—
 
b
e
y
o
n
d
 
s
i
m
p
l
e
 
l
a
t
/
l
n
g
 
r
a
d
i
u
s
.
"
 
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
 
R
e
a
l
G
e
o
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
R
e
a
l
 
s
y
s
t
e
m
s
 
p
i
c
k
 
d
i
f
f
e
r
e
n
t
 
s
c
h
e
m
e
s
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


 
 
 
 
 
 
 
 
T
h
e
 
c
h
o
i
c
e
 
d
e
p
e
n
d
s
 
o
n
 
t
h
e
 
q
u
e
r
y
 
p
a
t
t
e
r
n
:
 
e
x
a
c
t
 
p
o
l
y
g
o
n
 
c
o
n
t
a
i
n
m
e
n
t
 
v
s
 
s
i
m
p
l
e
 
r
a
d
i
u
s
 
v
s


 
 
 
 
 
 
 
 
n
e
a
r
e
s
t
-
n
e
i
g
h
b
o
r
.
 
F
i
v
e
 
r
e
a
l
 
s
y
s
t
e
m
s
 
a
n
d
 
t
h
e
i
r
 
p
i
c
k
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
7
 
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
S
Y
S
T
E
M
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
.
n
a
m
e
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
c
e
n
t
e
r
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
 
}
}
>
{
s
.
n
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
0
6
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
4
`
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
u
s
e
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
s
.
w
h
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
7
_
G
e
o
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
d
e
m
o
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
r
o
p
 
a
 
P
i
n
"
,
 
i
c
o
n
:
 
<
M
a
p
P
i
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
G
e
o
D
e
m
o
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
r
e
a
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
R
e
a
l
 
S
y
s
t
e
m
s
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
R
e
a
l
G
e
o
 
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
W
h
y
 
c
a
n
'
t
 
(
l
a
t
,
 
l
n
g
)
 
b
e
 
i
n
d
e
x
e
d
 
d
i
r
e
c
t
l
y
 
w
i
t
h
 
a
 
B
-
t
r
e
e
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
F
l
o
a
t
s
 
a
r
e
n
'
t
 
s
u
p
p
o
r
t
e
d
.
"
,


 
 
 
 
 
 
 
 
"
B
-
t
r
e
e
s
 
o
r
d
e
r
 
b
y
 
O
N
E
 
k
e
y
.
 
(
l
a
t
,
 
l
n
g
)
 
i
s
 
t
w
o
-
d
i
m
e
n
s
i
o
n
a
l
 
—
 
a
 
B
-
t
r
e
e
 
o
n
 
l
a
t
 
a
l
o
n
e
 
c
a
n
'
t
 
h
e
l
p
 
w
i
t
h
 
'
n
e
a
r
b
y
 
t
h
i
s
 
p
o
i
n
t
'
 
q
u
e
r
i
e
s
.
"
,


 
 
 
 
 
 
 
 
"
L
a
t
i
t
u
d
e
s
 
a
r
e
 
t
o
o
 
s
m
a
l
l
.
"
,


 
 
 
 
 
 
 
 
"
P
o
s
t
g
r
e
s
 
p
r
e
v
e
n
t
s
 
i
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
B
-
t
r
e
e
s
 
a
r
e
 
1
D
.
 
A
 
c
o
m
p
o
s
i
t
e
 
(
l
a
t
,
 
l
n
g
)
 
i
n
d
e
x
 
w
o
r
k
s
 
f
o
r
 
p
r
e
f
i
x
 
q
u
e
r
i
e
s
 
o
n
 
l
a
t
,
 
b
u
t
 
a
 
2
D
 
'
w
i
t
h
i
n
 
a
 
k
m
'
 
q
u
e
r
y
 
h
a
s
 
n
o
 
e
f
f
i
c
i
e
n
t
 
p
r
e
f
i
x
.
 
G
e
o
h
a
s
h
 
m
a
p
s
 
2
D
 
t
o
 
1
D
 
s
p
e
c
i
f
i
c
a
l
l
y
 
s
o
 
a
 
B
-
t
r
e
e
 
(
o
r
 
s
t
r
i
n
g
 
p
r
e
f
i
x
 
i
n
d
e
x
)
 
c
a
n
 
s
e
r
v
e
 
i
t
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
T
w
o
 
l
o
c
a
t
i
o
n
s
 
h
a
v
e
 
g
e
o
h
a
s
h
e
s
 
'
t
d
r
1
y
0
'
 
a
n
d
 
'
t
d
r
1
y
1
'
.
 
W
h
a
t
 
d
o
e
s
 
t
h
a
t
 
t
e
l
l
 
y
o
u
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
T
h
e
y
'
r
e
 
f
a
r
 
a
p
a
r
t
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
s
h
a
r
e
 
a
 
l
o
n
g
 
p
r
e
f
i
x
 
—
 
t
h
e
y
'
r
e
 
g
e
o
g
r
a
p
h
i
c
a
l
l
y
 
c
l
o
s
e
,
 
i
n
 
a
d
j
a
c
e
n
t
 
c
e
l
l
s
 
a
t
 
t
h
e
 
f
i
n
e
s
t
 
p
r
e
c
i
s
i
o
n
.
"
,


 
 
 
 
 
 
 
 
"
R
a
n
d
o
m
.
"
,


 
 
 
 
 
 
 
 
"
O
n
e
 
i
s
 
i
n
 
t
h
e
 
o
c
e
a
n
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
G
e
o
h
a
s
h
 
i
s
 
a
 
Z
-
o
r
d
e
r
 
/
 
M
o
r
t
o
n
 
c
u
r
v
e
.
 
S
h
a
r
e
d
 
p
r
e
f
i
x
 
m
e
a
n
s
 
s
h
a
r
e
d
 
r
e
g
i
o
n
.
 
C
e
l
l
s
 
w
i
t
h
 
p
r
e
f
i
x
 
'
t
d
r
1
y
'
 
a
r
e
 
i
n
 
t
h
e
 
s
a
m
e
 
n
e
i
g
h
b
o
r
h
o
o
d
;
 
t
h
e
 
d
i
f
f
e
r
i
n
g
 
l
a
s
t
 
c
h
a
r
 
p
i
c
k
s
 
o
n
e
 
o
f
 
3
2
 
s
u
b
-
c
e
l
l
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
A
 
'
r
e
s
t
a
u
r
a
n
t
s
 
w
i
t
h
i
n
 
2
 
k
m
'
 
q
u
e
r
y
 
a
t
 
s
c
a
l
e
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
 
s
t
a
n
d
a
r
d
 
p
i
p
e
l
i
n
e
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
F
u
l
l
-
s
c
a
n
 
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
.
"
,


 
 
 
 
 
 
 
 
"
C
o
m
p
u
t
e
 
p
i
n
 
g
e
o
h
a
s
h
 
+
 
n
e
i
g
h
b
o
r
s
 
c
o
v
e
r
i
n
g
 
2
k
m
,
 
p
r
e
f
i
x
-
s
c
a
n
 
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
,
 
t
h
e
n
 
f
i
l
t
e
r
 
b
y
 
e
x
a
c
t
 
g
r
e
a
t
-
c
i
r
c
l
e
 
d
i
s
t
a
n
c
e
.
"
,


 
 
 
 
 
 
 
 
"
U
s
e
 
a
 
g
r
a
p
h
 
D
B
.
"
,


 
 
 
 
 
 
 
 
"
C
a
c
h
e
 
t
h
e
 
e
n
t
i
r
e
 
m
a
p
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
G
e
o
h
a
s
h
 
g
i
v
e
s
 
a
n
 
a
p
p
r
o
x
i
m
a
t
e
 
s
e
t
.
 
T
h
e
 
b
o
u
n
d
i
n
g
-
b
o
x
 
s
c
a
n
 
i
s
 
c
h
e
a
p
 
b
e
c
a
u
s
e
 
i
t
'
s
 
a
n
 
i
n
d
e
x
e
d
 
p
r
e
f
i
x
 
s
c
a
n
.
 
E
x
a
c
t
 
d
i
s
t
a
n
c
e
 
f
i
l
t
e
r
 
o
n
 
t
h
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
e
t
 
i
s
 
t
h
e
 
f
i
n
a
l
 
s
t
e
p
.
 
O
r
d
e
r
 
o
f
 
m
a
g
n
i
t
u
d
e
s
 
f
a
s
t
e
r
 
t
h
a
n
 
s
c
a
n
n
i
n
g
 
a
l
l
 
l
o
c
a
t
i
o
n
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
a
t
'
s
 
U
b
e
r
'
s
 
H
3
 
t
r
y
i
n
g
 
t
o
 
f
i
x
 
r
e
l
a
t
i
v
e
 
t
o
 
p
l
a
i
n
 
g
e
o
h
a
s
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
D
i
s
k
 
u
s
a
g
e
.
"
,


 
 
 
 
 
 
 
 
"
G
e
o
h
a
s
h
 
c
e
l
l
s
 
a
r
e
 
r
e
c
t
a
n
g
l
e
s
 
w
i
t
h
 
n
o
n
-
u
n
i
f
o
r
m
 
n
e
i
g
h
b
o
r
 
d
i
s
t
a
n
c
e
s
,
 
a
n
d
 
e
d
g
e
 
c
e
l
l
s
 
d
i
s
t
o
r
t
.
 
H
e
x
a
g
o
n
s
 
h
a
v
e
 
u
n
i
f
o
r
m
 
n
e
i
g
h
b
o
r
 
d
i
s
t
a
n
c
e
 
a
n
d
 
c
l
e
a
n
 
n
e
s
t
i
n
g
 
a
t
 
s
c
a
l
e
.
"
,


 
 
 
 
 
 
 
 
"
N
a
m
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
S
p
e
e
d
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
H
e
x
a
g
o
n
s
 
h
a
v
e
 
6
 
e
q
u
i
d
i
s
t
a
n
t
 
n
e
i
g
h
b
o
r
s
 
—
 
b
e
t
t
e
r
 
f
o
r
 
d
i
s
t
a
n
c
e
 
e
s
t
i
m
a
t
e
s
 
a
n
d
 
s
u
r
g
e
 
z
o
n
e
s
.
 
G
e
o
h
a
s
h
 
'
r
e
c
t
a
n
g
l
e
s
'
 
h
a
v
e
 
8
 
n
e
i
g
h
b
o
r
s
 
a
t
 
v
a
r
y
i
n
g
 
d
i
s
t
a
n
c
e
s
,
 
w
h
i
c
h
 
c
a
u
s
e
s
 
w
e
i
r
d
 
a
r
t
i
f
a
c
t
s
 
i
n
 
d
i
s
p
a
t
c
h
 
m
a
t
h
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
G
e
o
h
a
s
h
 
&
 
Q
u
a
d
t
r
e
e
"


 
 
 
 
 
 
l
e
v
e
l
=
{
7
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
 
'
f
i
n
d
 
n
e
a
r
b
y
'
 
a
n
s
w
e
r
 
f
o
r
 
U
b
e
r
,
 
S
w
i
g
g
y
,
 
T
i
n
d
e
r
,
 
a
n
d
 
a
n
y
 
g
e
o
 
a
p
p
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


