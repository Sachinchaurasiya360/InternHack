
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
,
 
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
a
r
C
h
a
r
t
3
,
 
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
O
n
c
e
 
y
o
u
 
h
a
v
e
 
m
a
t
c
h
e
s
,
 
w
h
i
c
h
 
o
n
e
 
w
i
n
s
?
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
v
e
r
t
e
d
 
i
n
d
e
x
e
s
 
g
i
v
e
 
y
o
u
 
t
h
e
 
d
o
c
u
m
e
n
t
s
 
c
o
n
t
a
i
n
i
n
g
 
t
h
e
 
q
u
e
r
y
 
t
e
r
m
s
.
 
R
a
n
k
i
n
g
 
d
e
c
i
d
e
s


 
 
 
 
 
 
 
 
w
h
i
c
h
 
o
n
e
 
s
h
o
w
s
 
u
p
 
f
i
r
s
t
.
 
T
w
o
 
f
o
r
m
u
l
a
s
 
d
o
m
i
n
a
t
e
:
 
<
b
>
T
F
-
I
D
F
<
/
b
>
 
(
t
h
e
 
c
l
a
s
s
i
c
)
 
a
n
d
{
"
 
"
}


 
 
 
 
 
 
 
 
<
b
>
B
M
2
5
<
/
b
>
 
(
t
h
e
 
m
o
d
e
r
n
 
d
e
f
a
u
l
t
 
i
n
 
L
u
c
e
n
e
/
E
l
a
s
t
i
c
s
e
a
r
c
h
)
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
3
 
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
 
k
:
 
"
T
F
 
·
 
t
e
r
m
 
f
r
e
q
u
e
n
c
y
"
,
 
v
:
 
"
H
o
w
 
o
f
t
e
n
 
t
h
e
 
t
e
r
m
 
a
p
p
e
a
r
s
 
i
n
 
t
h
i
s
 
d
o
c
u
m
e
n
t
.
 
M
o
r
e
 
m
e
n
t
i
o
n
s
 
→
 
m
o
r
e
 
r
e
l
e
v
a
n
t
.
 
C
a
p
p
e
d
 
t
o
 
a
v
o
i
d
 
k
e
y
w
o
r
d
 
s
t
u
f
f
i
n
g
.
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
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
I
D
F
 
·
 
i
n
v
e
r
s
e
 
d
o
c
 
f
r
e
q
u
e
n
c
y
"
,
 
v
:
 
"
R
a
r
e
 
t
e
r
m
s
 
a
r
e
 
m
o
r
e
 
i
n
f
o
r
m
a
t
i
v
e
.
 
'
p
y
t
h
o
n
'
 
i
s
 
e
v
e
r
y
w
h
e
r
e
;
 
'
t
o
r
n
a
d
o
'
 
n
a
r
r
o
w
s
 
d
o
w
n
 
s
h
a
r
p
l
y
.
"
,
 
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
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
L
e
n
g
t
h
 
n
o
r
m
a
l
i
z
a
t
i
o
n
"
,
 
v
:
 
"
A
 
t
e
r
m
 
i
n
 
a
 
5
0
-
w
o
r
d
 
d
o
c
 
i
s
 
m
o
r
e
 
c
o
n
c
e
n
t
r
a
t
e
d
 
t
h
a
n
 
t
h
e
 
s
a
m
e
 
t
e
r
m
 
i
n
 
a
 
5
,
0
0
0
-
w
o
r
d
 
d
o
c
.
 
P
e
n
a
l
i
z
e
 
t
h
e
 
l
o
n
g
 
d
o
c
.
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
 
}
,


 
 
 
 
 
 
 
 
]
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
c
.
k
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
0
8
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
c
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
c
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
 
c
.
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
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
k
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
 
}
}
>
{
c
.
v
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
 
1
6
 
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
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
F
-
I
D
F
 
F
O
R
M
U
L
A


 
 
 
 
 
 
 
 
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
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
s
c
o
r
e
(
<
i
>
d
o
c
<
/
i
>
,
 
<
i
>
q
u
e
r
y
<
/
i
>
)
 
=
 
Σ
<
s
u
b
>
t
e
r
m
 
∈
 
q
u
e
r
y
<
/
s
u
b
>
 
t
f
(
t
e
r
m
,
 
d
o
c
)
 
×
 
i
d
f
(
t
e
r
m
)


 
 
 
 
 
 
 
 
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
L
u
c
e
n
e
<
/
b
>
 
d
e
f
a
u
l
t
s
 
t
o
 
B
M
2
5
.
 
<
b
>
E
l
a
s
t
i
c
s
e
a
r
c
h
<
/
b
>
 
u
s
e
s
 
B
M
2
5
 
w
i
t
h
 
p
e
r
-
f
i
e
l
d


 
 
 
 
 
 
 
 
 
 
t
u
n
i
n
g
.
 
<
b
>
P
o
s
t
g
r
e
s
 
t
s
_
r
a
n
k
<
/
b
>
 
u
s
e
s
 
a
 
T
F
-
I
D
F
 
v
a
r
i
a
n
t
.
 
T
h
e
 
r
a
n
k
i
n
g
 
i
n
 
G
o
o
g
l
e
&
r
s
q
u
o
;
s


 
 
 
 
 
 
 
 
 
 
e
a
r
l
y
 
d
a
y
s
 
w
a
s
 
e
x
t
e
n
d
e
d
-
T
F
-
I
D
F
 
+
 
P
a
g
e
R
a
n
k
;
 
m
o
d
e
r
n
 
G
o
o
g
l
e
 
u
s
e
s
 
n
e
u
r
a
l
 
r
a
n
k
e
r
s
 
b
u
t
 
t
h
e


 
 
 
 
 
 
 
 
 
 
p
r
e
-
f
i
l
t
e
r
 
i
s
 
s
t
i
l
l
 
B
M
2
5
-
s
t
y
l
e
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
 
L
i
v
e
 
r
a
n
k
i
n
g
 
d
e
m
o
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
C
O
R
P
U
S
 
=
 
[


 
 
{
 
i
d
:
 
1
,
 
t
i
t
l
e
:
 
"
P
y
t
h
o
n
 
w
e
b
 
f
r
a
m
e
w
o
r
k
s
"
,
 
t
e
x
t
:
 
"
d
j
a
n
g
o
 
f
l
a
s
k
 
f
a
s
t
a
p
i
 
p
y
t
h
o
n
 
w
e
b
 
f
r
a
m
e
w
o
r
k
 
p
y
t
h
o
n
 
p
y
t
h
o
n
 
w
e
b
"
 
}
,


 
 
{
 
i
d
:
 
2
,
 
t
i
t
l
e
:
 
"
P
y
t
h
o
n
 
d
a
t
a
 
a
n
a
l
y
s
i
s
"
,
 
t
e
x
t
:
 
"
p
y
t
h
o
n
 
p
a
n
d
a
s
 
n
u
m
p
y
 
d
a
t
a
 
a
n
a
l
y
s
i
s
 
m
a
c
h
i
n
e
 
l
e
a
r
n
i
n
g
 
p
y
t
h
o
n
"
 
}
,


 
 
{
 
i
d
:
 
3
,
 
t
i
t
l
e
:
 
"
J
a
v
a
S
c
r
i
p
t
 
f
r
a
m
e
w
o
r
k
s
"
,
 
t
e
x
t
:
 
"
r
e
a
c
t
 
v
u
e
 
a
n
g
u
l
a
r
 
s
v
e
l
t
e
 
j
a
v
a
s
c
r
i
p
t
 
f
r
a
m
e
w
o
r
k
 
w
e
b
 
f
r
o
n
t
e
n
d
"
 
}
,


 
 
{
 
i
d
:
 
4
,
 
t
i
t
l
e
:
 
"
T
o
r
n
a
d
o
 
f
r
a
m
e
w
o
r
k
"
,
 
t
e
x
t
:
 
"
t
o
r
n
a
d
o
 
p
y
t
h
o
n
 
a
s
y
n
c
 
w
e
b
 
f
r
a
m
e
w
o
r
k
 
n
o
n
-
b
l
o
c
k
i
n
g
"
 
}
,


 
 
{
 
i
d
:
 
5
,
 
t
i
t
l
e
:
 
"
W
e
b
 
p
e
r
f
o
r
m
a
n
c
e
"
,
 
t
e
x
t
:
 
"
c
a
c
h
i
n
g
 
c
d
n
 
w
e
b
 
p
e
r
f
o
r
m
a
n
c
e
 
l
a
t
e
n
c
y
 
o
p
t
i
m
i
z
a
t
i
o
n
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
 
S
T
O
P
W
O
R
D
S
 
=
 
n
e
w
 
S
e
t
(
[
"
a
"
,
 
"
a
n
"
,
 
"
t
h
e
"
,
 
"
a
n
d
"
,
 
"
o
r
"
,
 
"
f
o
r
"
,
 
"
o
f
"
,
 
"
t
o
"
,
 
"
i
n
"
,
 
"
o
n
"
]
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
 
t
o
k
e
n
i
z
e
(
s
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
[
]
 
{


 
 
r
e
t
u
r
n
 
s


 
 
 
 
.
t
o
L
o
w
e
r
C
a
s
e
(
)


 
 
 
 
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
[
^
a
-
z
0
-
9
\
s
]
/
g
,
 
"
 
"
)


 
 
 
 
.
s
p
l
i
t
(
/
\
s
+
/
)


 
 
 
 
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
 
!
S
T
O
P
W
O
R
D
S
.
h
a
s
(
t
)
)
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
 
D
o
c
S
t
a
t
s
 
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
 
t
o
k
e
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
 
t
f
:
 
M
a
p
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
>
;
 
l
e
n
:
 
n
u
m
b
e
r
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
 
b
u
i
l
d
S
t
a
t
s
(
)
:
 
D
o
c
S
t
a
t
s
[
]
 
{


 
 
r
e
t
u
r
n
 
C
O
R
P
U
S
.
m
a
p
(
(
d
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
o
k
e
n
s
 
=
 
t
o
k
e
n
i
z
e
(
`
$
{
d
.
t
i
t
l
e
}
 
$
{
d
.
t
e
x
t
}
`
)
;


 
 
 
 
c
o
n
s
t
 
t
f
 
=
 
n
e
w
 
M
a
p
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
>
(
)
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
 
t
 
o
f
 
t
o
k
e
n
s
)
 
t
f
.
s
e
t
(
t
,
 
(
t
f
.
g
e
t
(
t
)
 
?
?
 
0
)
 
+
 
1
)
;


 
 
 
 
r
e
t
u
r
n
 
{
 
i
d
:
 
d
.
i
d
,
 
t
i
t
l
e
:
 
d
.
t
i
t
l
e
,
 
t
o
k
e
n
s
,
 
t
f
,
 
l
e
n
:
 
t
o
k
e
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
 
b
u
i
l
d
I
d
f
(
d
o
c
s
:
 
D
o
c
S
t
a
t
s
[
]
)
:
 
M
a
p
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
>
 
{


 
 
c
o
n
s
t
 
i
d
f
 
=
 
n
e
w
 
M
a
p
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
>
(
)
;


 
 
c
o
n
s
t
 
N
 
=
 
d
o
c
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
 
d
f
 
=
 
n
e
w
 
M
a
p
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
>
(
)
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
 
d
 
o
f
 
d
o
c
s
)
 
{


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
t
e
r
m
 
o
f
 
n
e
w
 
S
e
t
(
d
.
t
o
k
e
n
s
)
)
 
{


 
 
 
 
 
 
d
f
.
s
e
t
(
t
e
r
m
,
 
(
d
f
.
g
e
t
(
t
e
r
m
)
 
?
?
 
0
)
 
+
 
1
)
;


 
 
 
 
}


 
 
}


 
 
f
o
r
 
(
c
o
n
s
t
 
[
t
e
r
m
,
 
c
o
u
n
t
]
 
o
f
 
d
f
.
e
n
t
r
i
e
s
(
)
)
 
{


 
 
 
 
i
d
f
.
s
e
t
(
t
e
r
m
,
 
M
a
t
h
.
l
o
g
(
1
 
+
 
(
N
 
-
 
c
o
u
n
t
 
+
 
0
.
5
)
 
/
 
(
c
o
u
n
t
 
+
 
0
.
5
)
)
)
;


 
 
}


 
 
r
e
t
u
r
n
 
i
d
f
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
 
b
m
2
5
S
c
o
r
e
(
q
:
 
s
t
r
i
n
g
[
]
,
 
d
:
 
D
o
c
S
t
a
t
s
,
 
i
d
f
:
 
M
a
p
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
>
,
 
a
v
g
L
e
n
:
 
n
u
m
b
e
r
,
 
k
1
:
 
n
u
m
b
e
r
,
 
b
:
 
n
u
m
b
e
r
)
:
 
{
 
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
;
 
p
e
r
T
e
r
m
:
 
{
 
t
e
r
m
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
r
i
b
u
t
i
o
n
:
 
n
u
m
b
e
r
 
}
[
]
 
}
 
{


 
 
l
e
t
 
s
c
o
r
e
 
=
 
0
;


 
 
c
o
n
s
t
 
p
e
r
T
e
r
m
:
 
{
 
t
e
r
m
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
r
i
b
u
t
i
o
n
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
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
 
t
e
r
m
 
o
f
 
q
)
 
{


 
 
 
 
c
o
n
s
t
 
t
f
 
=
 
d
.
t
f
.
g
e
t
(
t
e
r
m
)
 
?
?
 
0
;


 
 
 
 
i
f
 
(
t
f
 
=
=
=
 
0
)
 
{


 
 
 
 
 
 
p
e
r
T
e
r
m
.
p
u
s
h
(
{
 
t
e
r
m
,
 
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
:
 
0
 
}
)
;


 
 
 
 
 
 
c
o
n
t
i
n
u
e
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
i
d
f
V
a
l
 
=
 
i
d
f
.
g
e
t
(
t
e
r
m
)
 
?
?
 
0
;


 
 
 
 
c
o
n
s
t
 
d
e
n
o
m
 
=
 
t
f
 
+
 
k
1
 
*
 
(
1
 
-
 
b
 
+
 
(
b
 
*
 
d
.
l
e
n
)
 
/
 
a
v
g
L
e
n
)
;


 
 
 
 
c
o
n
s
t
 
c
 
=
 
i
d
f
V
a
l
 
*
 
(
(
t
f
 
*
 
(
k
1
 
+
 
1
)
)
 
/
 
d
e
n
o
m
)
;


 
 
 
 
s
c
o
r
e
 
+
=
 
c
;


 
 
 
 
p
e
r
T
e
r
m
.
p
u
s
h
(
{
 
t
e
r
m
,
 
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
:
 
c
 
}
)
;


 
 
}


 
 
r
e
t
u
r
n
 
{
 
s
c
o
r
e
,
 
p
e
r
T
e
r
m
 
}
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
a
n
k
i
n
g
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
q
u
e
r
y
,
 
s
e
t
Q
u
e
r
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
(
"
p
y
t
h
o
n
 
w
e
b
 
f
r
a
m
e
w
o
r
k
"
)
;


 
 
c
o
n
s
t
 
[
k
1
,
 
s
e
t
K
1
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
.
5
)
;


 
 
c
o
n
s
t
 
[
b
,
 
s
e
t
B
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
0
.
7
5
)
;




 
 
c
o
n
s
t
 
d
o
c
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
 
b
u
i
l
d
S
t
a
t
s
(
)
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
 
i
d
f
 
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
 
b
u
i
l
d
I
d
f
(
d
o
c
s
)
,
 
[
d
o
c
s
]
)
;


 
 
c
o
n
s
t
 
a
v
g
L
e
n
 
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
 
d
o
c
s
.
r
e
d
u
c
e
(
(
s
,
 
d
)
 
=
>
 
s
 
+
 
d
.
l
e
n
,
 
0
)
 
/
 
d
o
c
s
.
l
e
n
g
t
h
,
 
[
d
o
c
s
]
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
T
e
r
m
s
 
=
 
t
o
k
e
n
i
z
e
(
q
u
e
r
y
)
;




 
 
c
o
n
s
t
 
r
a
n
k
e
d
 
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
q
u
e
r
y
T
e
r
m
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
 
[
]
;


 
 
 
 
r
e
t
u
r
n
 
d
o
c
s


 
 
 
 
 
 
.
m
a
p
(
(
d
)
 
=
>
 
(
{


 
 
 
 
 
 
 
 
d
,


 
 
 
 
 
 
 
 
.
.
.
b
m
2
5
S
c
o
r
e
(
q
u
e
r
y
T
e
r
m
s
,
 
d
,
 
i
d
f
,
 
a
v
g
L
e
n
,
 
k
1
,
 
b
)
,


 
 
 
 
 
 
}
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
(
r
)
 
=
>
 
r
.
s
c
o
r
e
 
>
 
0
)


 
 
 
 
 
 
.
s
o
r
t
(
(
a
,
 
b
2
)
 
=
>
 
b
2
.
s
c
o
r
e
 
-
 
a
.
s
c
o
r
e
)
;


 
 
}
,
 
[
d
o
c
s
,
 
i
d
f
,
 
a
v
g
L
e
n
,
 
q
u
e
r
y
T
e
r
m
s
,
 
k
1
,
 
b
]
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
S
c
o
r
e
 
=
 
r
a
n
k
e
d
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
 
r
a
n
k
e
d
[
0
]
.
s
c
o
r
e
 
:
 
1
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
T
y
p
e
 
a
 
q
u
e
r
y
,
 
s
l
i
d
e
 
B
M
2
5
 
k
n
o
b
s
.
 
W
a
t
c
h
 
t
h
e
 
r
a
n
k
i
n
g
 
c
h
a
n
g
e
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


 
 
 
 
 
 
 
 
B
M
2
5
 
h
a
s
 
t
w
o
 
p
a
r
a
m
e
t
e
r
s
.
 
<
b
>
k
1
<
/
b
>
 
c
o
n
t
r
o
l
s
 
h
o
w
 
m
u
c
h
 
e
x
t
r
a
 
r
e
p
e
t
i
t
i
o
n
 
i
s
 
r
e
w
a
r
d
e
d


 
 
 
 
 
 
 
 
(
l
a
r
g
e
r
 
=
 
m
o
r
e
 
r
e
w
a
r
d
)
.
 
<
b
>
b
<
/
b
>
 
c
o
n
t
r
o
l
s
 
h
o
w
 
s
t
r
o
n
g
l
y
 
l
o
n
g
 
d
o
c
u
m
e
n
t
s
 
a
r
e
 
p
e
n
a
l
i
z
e
d


 
 
 
 
 
 
 
 
(
1
.
0
 
=
 
f
u
l
l
 
p
e
n
a
l
t
y
,
 
0
 
=
 
n
o
 
p
e
n
a
l
t
y
)
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
m
b
-
5
"
>


 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
q
u
e
r
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
 
s
e
t
Q
u
e
r
y
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
s
e
a
r
c
h
 
q
u
e
r
y
…
"


 
 
 
 
 
 
 
 
 
 
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
s
u
r
f
a
c
e
)
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
S
D
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


 
 
 
 
 
 
 
 
 
 
 
 
o
u
t
l
i
n
e
:
 
"
n
o
n
e
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
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
/
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
 
8
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
t
o
k
e
n
s
:
 
{
q
u
e
r
y
T
e
r
m
s
.
m
a
p
(
(
t
,
 
i
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
i
 
>
 
0
 
?
 
"
 
·
 
"
 
:
 
"
"
}
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
k
1
 
·
 
T
F
 
s
a
t
u
r
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
k
1
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
K
1
}
 
m
i
n
=
{
0
.
1
}
 
m
a
x
=
{
3
}
 
s
t
e
p
=
{
0
.
1
}
 
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
b
 
·
 
l
e
n
g
t
h
 
p
e
n
a
l
t
y
"
 
v
a
l
u
e
=
{
b
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
B
}
 
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
1
}
 
s
t
e
p
=
{
0
.
0
5
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
 
1
2
 
}
}
>


 
 
 
 
 
 
 
 
 
 
R
A
N
K
E
D
 
R
E
S
U
L
T
S
 
·
 
{
r
a
n
k
e
d
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
d
i
v
>


 
 
 
 
 
 
 
 
{
r
a
n
k
e
d
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


 
 
 
 
 
 
 
 
 
 
 
 
n
o
 
m
a
t
c
h
e
s
 
—
 
t
r
y
 
d
i
f
f
e
r
e
n
t
 
t
e
r
m
s


 
 
 
 
 
 
 
 
 
 
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
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
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
r
a
n
k
e
d
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
d
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
x
:
 
-
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
 
x
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
i
 
=
=
=
 
0
 
?
 
`
$
{
S
D
}
1
4
`
 
:
 
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
i
 
=
=
=
 
0
 
?
 
`
$
{
S
D
}
5
5
`
 
:
 
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
2
)
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
3
0
p
x
 
1
f
r
 
8
0
p
x
"
,
 
g
a
p
:
 
1
0
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
8
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
 
i
 
=
=
=
 
0
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
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
8
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
r
.
d
.
t
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
8
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
r
i
g
h
t
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
s
c
o
r
e
.
t
o
F
i
x
e
d
(
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
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
 
b
a
r
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
g
a
p
:
 
6
,
 
f
l
e
x
W
r
a
p
:
 
"
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
e
r
T
e
r
m
.
m
a
p
(
(
p
t
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
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
 
p
c
t
 
=
 
(
p
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
 
/
 
m
a
x
S
c
o
r
e
)
 
*
 
1
0
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
d
i
v
 
k
e
y
=
{
p
t
.
t
e
r
m
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
l
e
x
:
 
"
1
 
1
 
a
u
t
o
"
,
 
m
i
n
W
i
d
t
h
:
 
9
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
 
2
 
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
 
}
}
>
{
p
t
.
t
e
r
m
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
p
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
.
t
o
F
i
x
e
d
(
2
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
 
h
e
i
g
h
t
:
 
4
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
 
2
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
w
i
d
t
h
:
 
`
$
{
M
a
t
h
.
m
i
n
(
1
0
0
,
 
p
c
t
)
}
%
`
 
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
 
h
e
i
g
h
t
:
 
"
1
0
0
%
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


 
 
 
 
 
 
 
 
 
 
T
U
N
I
N
G


 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
T
r
y
 
b
=
0
 
(
n
o
 
l
e
n
g
t
h
 
p
e
n
a
l
t
y
)
 
—
 
l
o
n
g
 
d
o
c
s
 
w
i
n
 
e
v
e
n
 
i
f
 
t
h
e
 
t
e
r
m
 
i
s
 
b
u
r
i
e
d
.
 
T
r
y
 
b
=
1
 
—
 
s
h
o
r
t


 
 
 
 
 
 
 
 
d
o
c
s
 
w
i
n
 
e
v
e
n
 
i
f
 
t
h
e
 
t
e
r
m
 
a
p
p
e
a
r
s
 
o
n
c
e
.
 
T
h
e
 
d
e
f
a
u
l
t
 
<
b
>
b
=
0
.
7
5
<
/
b
>
 
i
s
 
a
 
g
o
o
d
 
b
a
l
a
n
c
e
 
f
o
r


 
 
 
 
 
 
 
 
p
r
o
s
e
.
 
T
r
y
 
k
1
=
0
.
5
 
(
l
o
w
 
T
F
 
s
a
t
u
r
a
t
i
o
n
)
 
—
 
r
e
p
e
a
t
i
n
g
 
a
 
t
e
r
m
 
h
e
l
p
s
 
l
e
s
s
;
 
h
a
r
d
e
r
 
t
o


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
-
s
t
u
f
f
 
y
o
u
r
 
w
a
y
 
t
o
 
t
h
e
 
t
o
p
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
.
t
o
F
i
x
e
d
(
2
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
 
B
e
y
o
n
d
 
B
M
2
5
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
B
E
Y
O
N
D
 
=
 
[


 
 
{
 
k
:
 
"
F
i
e
l
d
 
w
e
i
g
h
t
i
n
g
"
,
 
v
:
 
"
M
a
t
c
h
 
i
n
 
t
h
e
 
t
i
t
l
e
 
i
s
 
m
o
r
e
 
i
m
p
o
r
t
a
n
t
 
t
h
a
n
 
m
a
t
c
h
 
i
n
 
t
h
e
 
b
o
d
y
.
 
M
u
l
t
i
p
l
y
 
b
y
 
3
-
5
x
.
"
,
 
e
x
:
 
"
E
l
a
s
t
i
c
s
e
a
r
c
h
 
f
i
e
l
d
-
l
e
v
e
l
 
b
o
o
s
t
s
"
 
}
,


 
 
{
 
k
:
 
"
R
e
c
e
n
c
y
 
b
o
o
s
t
"
,
 
v
:
 
"
F
o
r
 
n
e
w
s
 
/
 
f
e
e
d
s
,
 
f
r
e
s
h
e
r
 
=
 
b
e
t
t
e
r
.
 
D
e
c
a
y
 
o
l
d
e
r
 
d
o
c
s
 
b
y
 
e
x
p
(
-
a
g
e
 
×
 
λ
)
.
"
,
 
e
x
:
 
"
T
w
i
t
t
e
r
,
 
H
a
c
k
e
r
 
N
e
w
s
"
 
}
,


 
 
{
 
k
:
 
"
Q
u
a
l
i
t
y
 
s
i
g
n
a
l
s
"
,
 
v
:
 
"
P
a
g
e
R
a
n
k
,
 
c
l
i
c
k
-
t
h
r
o
u
g
h
 
r
a
t
e
,
 
d
o
m
a
i
n
 
a
u
t
h
o
r
i
t
y
.
 
A
p
p
l
y
 
a
s
 
a
 
m
u
l
t
i
p
l
i
c
a
t
i
v
e
 
o
r
 
a
d
d
i
t
i
v
e
 
b
o
n
u
s
.
"
,
 
e
x
:
 
"
G
o
o
g
l
e
,
 
e
B
a
y
,
 
A
m
a
z
o
n
"
 
}
,


 
 
{
 
k
:
 
"
P
e
r
s
o
n
a
l
i
z
a
t
i
o
n
"
,
 
v
:
 
"
B
o
o
s
t
 
d
o
c
s
 
t
h
e
 
u
s
e
r
 
h
a
s
 
s
h
o
w
n
 
i
n
t
e
r
e
s
t
 
i
n
.
 
U
s
e
r
-
v
e
c
t
o
r
 
×
 
d
o
c
-
v
e
c
t
o
r
 
d
o
t
 
p
r
o
d
u
c
t
.
"
,
 
e
x
:
 
"
N
e
t
f
l
i
x
,
 
Y
o
u
T
u
b
e
,
 
P
i
n
t
e
r
e
s
t
"
 
}
,


 
 
{
 
k
:
 
"
N
e
u
r
a
l
 
r
e
r
a
n
k
e
r
s
"
,
 
v
:
 
"
B
M
2
5
 
p
r
e
f
i
l
t
e
r
s
 
t
o
p
-
1
0
0
0
;
 
a
 
t
r
a
n
s
f
o
r
m
e
r
 
r
e
r
a
n
k
s
 
t
o
p
-
1
0
.
 
T
h
e
 
f
a
s
t
/
a
c
c
u
r
a
t
e
 
s
p
l
i
t
.
"
,
 
e
x
:
 
"
M
o
d
e
r
n
 
G
o
o
g
l
e
,
 
B
i
n
g
"
 
}
,


 
 
{
 
k
:
 
"
L
e
a
r
n
i
n
g
 
t
o
 
R
a
n
k
"
,
 
v
:
 
"
T
r
a
i
n
 
a
 
m
o
d
e
l
 
o
n
 
(
q
u
e
r
y
,
 
d
o
c
,
 
c
l
i
c
k
)
 
t
u
p
l
e
s
 
t
o
 
p
r
e
d
i
c
t
 
i
d
e
a
l
 
o
r
d
e
r
i
n
g
.
"
,
 
e
x
:
 
"
L
i
g
h
t
G
B
M
,
 
X
G
B
o
o
s
t
 
r
a
n
k
i
n
g
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
 
B
e
y
o
n
d
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
a
t
 
r
e
a
l
 
s
e
a
r
c
h
 
e
n
g
i
n
e
s
 
l
a
y
e
r
 
o
n
 
t
o
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


 
 
 
 
 
 
 
 
B
M
2
5
 
i
s
 
t
h
e
 
s
t
r
o
n
g
 
b
a
s
e
l
i
n
e
.
 
P
r
o
d
u
c
t
i
o
n
 
s
e
a
r
c
h
 
a
d
d
s
 
t
h
e
s
e
 
s
i
g
n
a
l
s
 
o
n
 
t
o
p
,
 
o
f
t
e
n
 
a
s
 
a


 
 
 
 
 
 
 
 
h
y
b
r
i
d
 
w
h
e
r
e
 
B
M
2
5
 
p
i
c
k
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
 
a
n
d
 
a
 
l
e
a
r
n
e
d
 
r
a
n
k
e
r
 
r
e
o
r
d
e
r
s
 
t
h
e
m
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
B
E
Y
O
N
D
.
m
a
p
(
(
b
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
b
.
k
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
{
b
.
k
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
b
.
v
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
 
S
D
 
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
b
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
R
a
n
k
i
n
g
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
T
u
n
e
 
t
h
e
 
R
a
n
k
i
n
g
"
,
 
i
c
o
n
:
 
<
B
a
r
C
h
a
r
t
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
a
n
k
i
n
g
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
b
e
y
o
n
d
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
y
o
n
d
 
B
M
2
5
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
B
e
y
o
n
d
 
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
 
d
o
e
s
 
I
D
F
 
(
i
n
v
e
r
s
e
 
d
o
c
u
m
e
n
t
 
f
r
e
q
u
e
n
c
y
)
 
r
e
w
a
r
d
 
r
a
r
e
 
t
e
r
m
s
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
R
a
r
e
 
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
C
o
m
m
o
n
 
t
e
r
m
s
 
a
p
p
e
a
r
 
e
v
e
r
y
w
h
e
r
e
 
a
n
d
 
d
o
n
'
t
 
d
i
s
t
i
n
g
u
i
s
h
 
d
o
c
s
.
 
R
a
r
e
 
t
e
r
m
s
 
i
d
e
n
t
i
f
y
 
a
 
s
m
a
l
l
 
r
e
l
e
v
a
n
t
 
s
e
t
,
 
s
o
 
a
 
m
a
t
c
h
 
o
n
 
t
h
e
m
 
i
s
 
m
o
r
e
 
i
n
f
o
r
m
a
t
i
v
e
.
"
,


 
 
 
 
 
 
 
 
"
R
a
r
e
 
t
e
r
m
s
 
a
r
e
 
b
i
g
g
e
r
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
I
f
 
'
t
h
e
'
 
a
p
p
e
a
r
s
 
i
n
 
e
v
e
r
y
 
d
o
c
,
 
m
a
t
c
h
i
n
g
 
i
t
 
t
e
l
l
s
 
y
o
u
 
n
o
t
h
i
n
g
.
 
I
f
 
'
t
o
r
n
a
d
o
'
 
a
p
p
e
a
r
s
 
i
n
 
5
 
d
o
c
s
,
 
m
a
t
c
h
i
n
g
 
i
t
 
n
a
r
r
o
w
s
 
t
h
e
 
r
e
s
u
l
t
 
s
e
t
 
s
h
a
r
p
l
y
.
 
I
D
F
 
m
a
t
h
e
m
a
t
i
c
a
l
l
y
 
c
a
p
t
u
r
e
s
 
t
h
i
s
 
'
d
i
s
c
r
i
m
i
n
a
t
i
n
g
 
p
o
w
e
r
'
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
 
d
o
e
s
 
t
h
e
 
B
M
2
5
 
'
b
'
 
p
a
r
a
m
e
t
e
r
 
d
o
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
e
c
o
r
a
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
"
C
o
n
t
r
o
l
s
 
h
o
w
 
m
u
c
h
 
l
o
n
g
 
d
o
c
u
m
e
n
t
s
 
a
r
e
 
p
e
n
a
l
i
z
e
d
.
 
b
=
0
 
m
e
a
n
s
 
n
o
 
l
e
n
g
t
h
 
n
o
r
m
a
l
i
z
a
t
i
o
n
;
 
b
=
1
 
m
e
a
n
s
 
f
u
l
l
 
n
o
r
m
a
l
i
z
a
t
i
o
n
.
 
0
.
7
5
 
i
s
 
t
h
e
 
t
y
p
i
c
a
l
 
d
e
f
a
u
l
t
.
"
,


 
 
 
 
 
 
 
 
"
S
e
t
s
 
t
h
e
 
c
a
c
h
e
 
s
i
z
e
.
"
,


 
 
 
 
 
 
 
 
"
E
n
c
r
y
p
t
s
 
t
h
e
 
i
n
d
e
x
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
W
i
t
h
o
u
t
 
b
,
 
a
 
5
,
0
0
0
-
w
o
r
d
 
d
o
c
 
t
h
a
t
 
m
e
n
t
i
o
n
s
 
'
p
y
t
h
o
n
'
 
o
n
c
e
 
a
n
d
 
a
 
5
0
-
w
o
r
d
 
d
o
c
 
t
h
a
t
 
m
e
n
t
i
o
n
s
 
i
t
 
o
n
c
e
 
w
o
u
l
d
 
t
i
e
.
 
b
 
n
o
r
m
a
l
i
z
e
s
 
f
o
r
 
l
e
n
g
t
h
 
s
o
 
t
h
e
 
s
h
o
r
t
e
r
,
 
m
o
r
e
 
f
o
c
u
s
e
d
 
d
o
c
 
r
a
n
k
s
 
h
i
g
h
e
r
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
 
c
l
o
s
e
r
 
t
o
 
h
o
w
 
m
o
d
e
r
n
 
G
o
o
g
l
e
 
r
a
n
k
s
 
r
e
s
u
l
t
s
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
 
T
F
-
I
D
F
.
"
,


 
 
 
 
 
 
 
 
"
P
u
r
e
 
B
M
2
5
.
"
,


 
 
 
 
 
 
 
 
"
B
M
2
5
-
s
t
y
l
e
 
f
i
l
t
e
r
 
+
 
l
e
a
r
n
e
d
/
n
e
u
r
a
l
 
r
e
r
a
n
k
e
r
 
o
n
 
t
h
e
 
t
o
p
-
K
 
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
 
2
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
N
e
u
r
a
l
 
r
a
n
k
e
r
s
 
a
r
e
 
t
o
o
 
s
l
o
w
 
t
o
 
s
c
o
r
e
 
b
i
l
l
i
o
n
s
 
o
f
 
d
o
c
s
.
 
L
e
x
i
c
a
l
 
r
e
t
r
i
e
v
a
l
 
(
B
M
2
5
-
s
t
y
l
e
)
 
c
h
e
a
p
l
y
 
p
r
e
f
i
l
t
e
r
s
 
t
o
 
t
o
p
-
1
0
0
0
;
 
a
 
l
e
a
r
n
e
d
 
m
o
d
e
l
 
r
e
r
a
n
k
s
 
t
h
e
 
t
o
p
-
1
0
.
 
S
p
e
e
d
 
×
 
a
c
c
u
r
a
c
y
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
 
d
o
 
s
e
a
r
c
h
 
e
n
g
i
n
e
s
 
a
p
p
l
y
 
f
i
e
l
d
-
l
e
v
e
l
 
b
o
o
s
t
s
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
e
c
o
r
a
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
"
A
 
m
a
t
c
h
 
i
n
 
t
h
e
 
t
i
t
l
e
 
o
r
 
H
1
 
i
s
 
m
u
c
h
 
s
t
r
o
n
g
e
r
 
e
v
i
d
e
n
c
e
 
o
f
 
r
e
l
e
v
a
n
c
e
 
t
h
a
n
 
a
 
m
a
t
c
h
 
i
n
 
t
h
e
 
b
o
d
y
.
 
M
u
l
t
i
p
l
y
i
n
g
 
f
i
e
l
d
 
s
c
o
r
e
s
 
r
e
f
l
e
c
t
s
 
t
h
a
t
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
s
p
e
e
d
s
 
u
p
 
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
I
t
 
s
a
v
e
s
 
d
i
s
k
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
A
u
t
h
o
r
s
 
p
u
t
 
w
h
a
t
 
a
 
d
o
c
 
i
s
 
a
b
o
u
t
 
i
n
 
t
h
e
 
t
i
t
l
e
.
 
M
a
t
c
h
i
n
g
 
t
h
e
r
e
 
i
s
 
h
i
g
h
-
s
i
g
n
a
l
.
 
P
r
o
d
u
c
t
i
o
n
 
s
e
a
r
c
h
 
e
n
g
i
n
e
s
 
e
x
p
o
s
e
 
p
e
r
-
f
i
e
l
d
 
b
o
o
s
t
s
 
(
t
i
t
l
e
 
×
 
5
,
 
b
o
d
y
 
×
 
1
)
 
s
o
 
t
h
i
s
 
s
i
g
n
a
l
 
f
l
o
w
s
 
t
h
r
o
u
g
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
T
F
-
I
D
F
 
&
 
B
M
2
5
 
R
a
n
k
i
n
g
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
2
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
 
r
e
l
e
v
a
n
c
e
 
s
c
o
r
i
n
g
 
i
n
s
i
d
e
 
L
u
c
e
n
e
,
 
E
l
a
s
t
i
c
s
e
a
r
c
h
,
 
a
n
d
 
e
v
e
r
y
 
s
e
a
r
c
h
 
b
a
r
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


